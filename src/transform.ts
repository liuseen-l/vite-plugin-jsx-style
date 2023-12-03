import { parse } from '@vue/compiler-sfc';
import sha256 from "crypto-js/sha256";
import MagicString from "magic-string";
import path from "node:path";
import { STYLE_RE, SUF_FIX } from "./const";
import { TypevirtualModuleIds } from "./types";

type TypeParseStyle = {
  lang: string,
  content: string
}

function parseStyle(matchs: RegExpMatchArray[]): TypeParseStyle[] {
  const code = matchs.map(m => m[0]).join('\n')
  const { descriptor: { styles } } = parse(code)

  return styles.map(s => {
    return {
      lang: s.lang || 'css',
      content: s.content
    }
  })
}


export const transform = (code: string, id: string, virtualModules: Record<string, TypevirtualModuleIds>) => {
  const fileExt = path.extname(id).slice(1)
  if (SUF_FIX.includes(fileExt)) {
    const matchs = Array.from(code.matchAll(STYLE_RE))
    if (!matchs.length) {
      return
    }
    const res = parseStyle(matchs)

    const s = new MagicString(code);
    for (const c of res) {
      const unicid = sha256(id + `${c.content}`).toString()
      const virtualId = `virtual:${unicid}.${c.lang}`
      const _import = `import '${virtualId}'`

      virtualModules[virtualId] = {
        raw: {
          id,
          code,
        },
        unicid,
        virtualId,
        matchs,
        _import,
        content: c.content
      }

      // append vitrulModule
      s.prepend(`${_import}\n`)
    }

    // remove <style></style>
    // matchs.forEach((c) => {
    //   const start = c.index || 0
    //   const end = start + c[0].length
    //   s.remove(start, end)
    // })
    return {
      code: s.toString(),
      map: s.generateMap()
    }
  }
}
