import { Fragment, isVNode } from 'vue'
import type { VNode, VNodeChild } from 'vue'
export const isFragment = (node: VNodeChild): node is VNode => {
  if (isVNode(node))
    return node.type === Fragment
  return false
}
