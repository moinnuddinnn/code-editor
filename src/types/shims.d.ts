declare module "react" {
  const React: any;
  export default React;
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T = any>(initial: T | null): { current: T | null };
}
declare module "react-dom/client" {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: any): void;
  };
}
declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}
declare module "monaco-editor" {
  export const editor: any;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
// This empty export makes the file a module while keeping global declarations
export {};








