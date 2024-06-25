import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Base64 } from "js-base64";
import DataComp from "./DataComp";
import InfoComp from "./InfoComp";

export type Data = {
    msgsNumber: number;
    daysNumber: number;
    moreUsedDay: string;
    moreUsedHour: string;
    wordsNumber: number;
    fiveMoreUsedWords: string[];
    user1: string;
    user2: string;
    user1moreUsedWords: string[];
    user2moreUsedWords: string[];
    user2words: number;
    user1words: number;
};

function App() {
    const [text, setText] = useState<string>("");
    const [data, setData] = useState<Data | null>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result;
                setText(text as string);
            };

            reader.readAsText(file, "utf-8");
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const b64text = Base64.encode(text);
        const response = await axios.post("https://chat-analizer.fly.dev", {
            text: b64text,
        });
        setData(response.data);
    };

    const hndleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="w-screen min-h-screen bg-sky-400 flex flex-col items-center">
            <h1 className="bg-sky-600 border-2 border-sky-200 text-sky-400 w-4/5 font-extrabold text-4xl text-center rounded-lg m-5 p-2">
                Chatizator
            </h1>
            {!data && (
                <>
                    <h2 className="container">
                        Compare the number of words between two users of a
                        Whatsapp chat!
                    </h2>
                    <InfoComp />
                    <form
                        className="flex flex-col container text-center"
                        onSubmit={(e) => handleFormSubmit(e)}
                    >
                        <h2 className="p-5 font-bold">Upload the text here</h2>
                        <input
                            type="file"
                            name="textfile"
                            accept=".txt"
                            onChange={(e) => handleInputChange(e)}
                        />
                        <textarea
                            onChange={(e) => hndleTextAreaChange(e)}
                            placeholder="Paste here the text"
                            className="text-black"
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
            {data != null && <DataComp dataToShow={data} />}
        </div>
    );
}

export default App;
