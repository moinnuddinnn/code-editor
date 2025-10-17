import { jsx as _jsx } from "react/jsx-runtime";
import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";
//import "../types/shims";
export default function Editor() {
    const editorRef = useRef(null);
    useEffect(() => {
        if (editorRef.current) {
            const editor = monaco.editor.create(editorRef.current, {
                value: "// Start coding here...",
                language: "javascript",
                theme: "vs-dark",
                automaticLayout: true,
            });
            // Cleanup on unmount
            return () => {
                editor.dispose();
            };
        }
    }, []);
    return _jsx("div", { ref: editorRef, style: { height: "100vh", width: "100%" } });
}
