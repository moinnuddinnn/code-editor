import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";


export default function Editor() {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
        const editor = monaco.editor.create(editorRef.current, {
        value: "// Start coding here...",
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true,
        });

    //cleanup on unmount
        return () => {
        editor.dispose();
        };
    }
    }, []);

  return <div ref={editorRef} style={{ height: "100vh", width: "100%" }} />;

}

