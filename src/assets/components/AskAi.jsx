import React, { useState } from "react";

function AskAI() {
    const [prompt, setPrompt] = useState('');
    const [chatResponse, setChatResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        setLoading(true); // Show loading screen
        try {
            const response = await fetch(`https://f-r-i-d-a-y-backend.vercel.app/ask-ai?prompt=${prompt}`);
            const data = await response.text();
            setChatResponse(data);
        } catch (error) {
            console.error("Error generating answer:", error);
            setChatResponse("An error occurred while generating the response."); // Handle error gracefully
        } finally {
            setLoading(false); // Hide loading screen
        }
    };

    return (
        <div style={{ textAlign: "center" }}> {/* Center the entire content */}
            <h2>Talk to AI</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask Nova anything"
            />
            <button onClick={askAI} disabled={loading}>
                {loading ? "Loading..." : "AskAI"}
            </button>

            <div className="output">
                {loading ? (
                    <p style={{ textAlign: "center", margin: "20px 0", fontSize: "18px" }}>
                        Loading...
                    </p>
                ) : (
                    <p>{chatResponse}</p>
                )}
            </div>
        </div>
    );
}

export default AskAI;
