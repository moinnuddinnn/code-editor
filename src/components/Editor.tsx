




  useEffect(() => {
    if (editorRef.current) {

    //cleanup on unmount
        return () => {
        editor.dispose();
        };
    }
    }, []);

  

}





