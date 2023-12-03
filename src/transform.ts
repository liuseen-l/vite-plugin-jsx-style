import sha256 from "crypto-js/sha256";
import MagicString from "magic-string";
import path from "node:path";
import { STYLE_RE, SUF_FIX } from "./const";
import { TypevirtualModuleIds } from "./types";


export const transform = (code: string, id: string, virtualModules: Record<string, TypevirtualModuleIds>) => {
  const fileExt = path.extname(id).slice(1)
  if (SUF_FIX.includes(fileExt)) {
    const matchs = Array.from(code.matchAll(STYLE_RE))
    if (!matchs.length) {
      return
    }

    const unicid = sha256(id).toString()
    const virtualId = `virtual:${unicid}.css`
    const _import = `import '${virtualId}'`
    const virtualModule = matchs.map(m => m[1]).join('')

    const s = new MagicString(code);

    // append vitrulModule
    s.prepend(`${_import}\n`)

    // remove <style></style>
    // matchs.forEach((c) => {
    //   const start = c.index || 0
    //   const end = start + c[0].length
    //   s.remove(start, end)
    // })

    virtualModules[virtualId] = {
      raw: {
        id,
        code,
      },
      unicid,
      virtualId,
      matchs,
      _import,
      virtualModule
    }

    return {
      code: s.toString(),
      map: s.generateMap()
    }
  }
}
