import { useRef } from "react";

/**
 * Instance Hook
 *
 * @description
 * 用於建立不該影響渲染的物件
 *
 * @example
 * ```
 * const ref = useInstance(() => ({ current: null }))
 * ```
 */
export const useInstance = <T,>(init: () => T) => {
  const ref = useRef<T>(null);
  ref.current ??= init();
  return ref.current;
};
