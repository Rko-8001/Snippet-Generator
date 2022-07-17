import React from 'react';
import "../style/Output.css";
import { html } from "common-tags";

const Output = (props) => {

    function copyToClipboard() {
        let strHTML = props.html + " \n";
        const midHTML = strHTML
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .split("\n");
        const snippetSize = midHTML.length;

        const finalHTML = midHTML.map((line, index) => {
            return index === snippetSize - 1 ? `"${line}"` : `"${line}",`;
        });

        const clipboard = html`"${props.des}": {
            "prefix": "${props.tab}",
            "body": [
              ${finalHTML.join('\n')}
            ],
            "description": "${props.des}"
          }`;
        console.log(clipboard);
        navigator.clipboard.writeText(clipboard);
    }
    return (
        <>
            <button className="btn" onClick={copyToClipboard} > Copy snippet </button>
        </>
    );

};

export default Output;