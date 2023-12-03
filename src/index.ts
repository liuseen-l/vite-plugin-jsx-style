import type { Plugin } from 'vite';
import { transform } from './transform';
import type { TypevirtualModuleIds } from './types';


export default function InnerStylePlugin(): Plugin {
  const virtualModules: Record<string, TypevirtualModuleIds> = {}
  const resolvedVirtualModules: Record<string, Pick<TypevirtualModuleIds, 'virtualModule'>> = {}

  return {
    name: 'vite-plugin-innerStyle',
    enforce: 'pre',
    resolveId(id) {
      if (virtualModules[id]) {
        const resolvedVirtualModuleId = '\0' + id
        resolvedVirtualModules[resolvedVirtualModuleId] = {
          virtualModule: virtualModules[id].virtualModule
        }
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (resolvedVirtualModules[id]) {
        return resolvedVirtualModules[id].virtualModule
      }
    },
    transform(code: string, id: string) {
      return transform(code, id, virtualModules)
    },
  }
}

