import React, { useState } from "react";

function AskAI(){
    const[prompt,setPrompt]=useState('');
    const[chatResponse,setChatRsponse]=useState('');

    const askAI=async()=>{
        try {
            const response = await fetch (`http://localhost:8080/ask-ai?prompt=${prompt}`);
            const data=await response.text();
            setChatRsponse(data);
        } catch (error) {
            console.error("Error generating answer:", error);
        }
    }
    return (
        <div>
            <h2>Talk to NovaAI</h2>
            <input type="text" 
                    value={prompt}
                    onChange={(e)=>setPrompt(e.target.value)}
                    placeholder="Ask Nova anything"/>
            <button onClick={askAI}>AskAI</button>

            <div className="output">
                <p>{chatResponse}</p>
            </div>
        </div>
    );
}

export default AskAI;