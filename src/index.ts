import type { Plugin } from 'vite';
import { transform } from './transform';
import type { TypevirtualModuleIds } from './types';


export default function InnerStylePlugin(): Plugin {
  const virtualModules: Record<string, TypevirtualModuleIds> = {}
  const resolvedVirtualModules: Record<string, Pick<TypevirtualModuleIds, 'content'>> = {}

  return {
    name: 'vite-plugin-jsx-style',
    enforce: 'pre',
    resolveId(id) {
      if (virtualModules[id]) {
        const resolvedVirtualModuleId = '\0' + id
        resolvedVirtualModules[resolvedVirtualModuleId] = {
          content: virtualModules[id].content
        }
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (resolvedVirtualModules[id]) {
        return resolvedVirtualModules[id].content
      }
    },
    transform(code: string, id: string) {
      return transform(code, id, virtualModules)
    },
  }
}

