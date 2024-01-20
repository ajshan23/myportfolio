import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeViewer = () => {
  const [code, setCode] = useState('');

  const updateCode = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <textarea
        className="w-full p-4 border border-gray-300 rounded"
        rows="10"
        placeholder="Enter your code here"
        value={code}
        onChange={updateCode}
      ></textarea>

      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeViewer;
