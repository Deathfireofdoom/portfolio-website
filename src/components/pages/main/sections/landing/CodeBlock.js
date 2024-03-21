import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#282a36',
    textAlign: "left" 
  }
}

const codeString = `class OskarElvkull:
  def __init__(self):
      self.role = "Backend Engineer"
      self.languages = ["python", "golang"]`;

const CodeBlock = () => {
  return (
    <div style={styles.container}>
      <SyntaxHighlighter language="python" style={dracula} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
