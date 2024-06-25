import React from "react";

function InfoComp() {
    return (
        <div className="container text-center">
            <h2 className=" font-bold  p-4">How I get the txt file?</h2>
            <p className="p-3">Make sure you have WhatsApp in English.</p>
            <p className="p-3">Open the chat you want to analyze.</p>
            <p className="p-3">
                Click on the three dots in the upper right corner.
            </p>
            <p className="p-3">Click on "More".</p>
            <p className="p-3">Click on "Export chat".</p>
            <p className="p-3">Click on "Without media".</p>
            <p className="p-3">
                Send the chat to your email (you can send it to your own chat
                also).
            </p>
            <p className="p-3">Download and open the chat (it is a zip file)</p>
            <p className="p-3">Open the txt file inside the zip file</p>
            <p className="p-3">
                Upload the txt file in the form above or copy the content and
                paste it
            </p>
        </div>
    );
}

export default InfoComp;
