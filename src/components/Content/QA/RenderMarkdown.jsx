import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coy} from 'react-syntax-highlighter/dist/esm/styles/prism';
const RenderMarkdown = ({markdown}) => {
   return (
      <>
         <ReactMarkdown
            children={markdown}
            components={{
               code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                     <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={coy}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                     />
                  ) : (
                     <code className={className} {...props}>
                        <SyntaxHighlighter style={coy} language="javascript">
                           {children}
                        </SyntaxHighlighter>
                     </code>
                  );
               },
            }}
         />
      </>
   );
};

export default RenderMarkdown;
