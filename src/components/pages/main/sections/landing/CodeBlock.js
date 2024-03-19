import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = () => {
  const codeString = `class OskarElvkull:
    def __init__(self):
        self.role = "backend engineer"
        self.languages = ["python", "golang"]`;

  // Styles for the wrapper div
  const wrapperStyle = {
    maxWidth: '800px', // Set a max width for the code block
    margin: '0 auto', // Center the block horizontally
    padding: '20px', // Add some padding around the code block
    boxSizing: 'border-box', // Include padding in the element's total width and height
    backgroundColor: '#282a36', // Match the Dracula theme background color or choose your own
    textAlign: "left"
  };

  return (
    <div style={wrapperStyle}>
      <SyntaxHighlighter language="python" style={dracula} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
