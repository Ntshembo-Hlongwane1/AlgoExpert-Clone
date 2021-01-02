import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";

export const TextEditor = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("typescript");
  const [isEditorReady, setIsEditorReady] = useState(false);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }

  return (
    <>
      <Editor
        height="90vh" // By default, it fully fits with its parent
        theme={theme}
        language={language}
        loading={<Loader />}
        editorDidMount={handleEditorDidMount}
        options={{ lineNumbers: "on" }}
      />
    </>
  );
};
