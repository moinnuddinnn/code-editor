




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

  

}




