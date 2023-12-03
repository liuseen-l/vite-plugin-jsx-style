import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { transform } from '../src/transform'
import { TypevirtualModuleIds } from '../src/types'


describe('match style', async () => {
  const id = resolve(__dirname, '../playground/src/App.tsx')
  const code = await readFile(id, 'utf-8')
  const virtualModules: Record<string, TypevirtualModuleIds> = {}
  it('match style1', async () => {
    const source = transform(code, id, virtualModules)
    expect(source?.code).toMatchInlineSnapshot(`
      "import 'virtual:999eb31849eec35df3fc1863df1aef3d96ac71ed0f375d22141c95415817f6ae.css'
      import { useState } from 'react'


      function App() {
        const [count, setCount] = useState(0)

        return (
          <>
            <h1>Vite + React</h1>
            <div className=\\"card\\">
              <button onClick={() => setCount(count => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className=\\"read-the-docs\\">
              Click on the Vite and React logos to learn more
            </p>
          </>
        )
      }

      export default App

      {
        \`

      \`}"
    `)
  })
})