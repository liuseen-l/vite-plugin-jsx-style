import { parse } from '@vue/compiler-sfc'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { describe, it } from 'vitest'
import { transform } from '../src/transform'
import { TypevirtualModuleIds } from '../src/types'

describe('match style', async () => {
  const id = resolve(__dirname, '../playground/src/App.tsx')
  const code = await readFile(id, 'utf-8')
  const wrapId = 'virtual:999eb31849eec35df3fc1863df1aef3d96ac71ed0f375d22141c95415817f6ae.css'
  const virtualModules: Record<string, TypevirtualModuleIds> = {}
  it('match style1', () => {
    const source = transform(code, id, virtualModules)

    // if (virtualModules[wrapId].matchs)
    //   for (const iterator of virtualModules[wrapId].matchs) {
    //     console.log(iterator);
    //   }
    const { descriptor: { styles } } = parse(virtualModules[wrapId].matchs[0][0])

    console.log(styles);
    
  })

})