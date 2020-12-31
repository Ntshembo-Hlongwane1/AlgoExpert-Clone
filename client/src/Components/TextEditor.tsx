import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";
import "../StyleSheet/TextEditor.css";

export const TextEditor = () => {
  const [language, setLanguage] = useState("typescript");
  const [isEditorReady, setIsEditorReady] = useState(false);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }

  return (
    <div className="textEditor__container">
      <Editor
        height="90vh" // By default, it fully fits with its parent
        theme={"dark"}
        language={language}
        loading={<Loader />}
        editorDidMount={handleEditorDidMount}
        options={{ lineNumbers: "on" }}
        className="textEditor"
        width={"80%"}
      />
    </div>
  );
};
