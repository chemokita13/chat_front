import React from "react";
import { Data } from "./App";
import Chart from "react-google-charts";

function dataToShowComp({ dataToShow }: { dataToShow: Data }) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="container">
                Chat with:&nbsp;{dataToShow.user1}&nbsp;&&nbsp;
                {dataToShow.user2}
            </h1>
            <article className=" container w-1/2 flex flex-col items-center text-left">
                <h2 className="container text-center w-1/4">General</h2>
                <div className="px-3 py-1">
                    <p>Messages: {dataToShow.msgsNumber}</p>
                    <p>Days talked: {dataToShow.daysNumber}</p>
                    <p>More used day: {dataToShow.moreUsedDay}</p>
                    <p>More used hour: {dataToShow.moreUsedHour}</p>
                    <p>Words: {dataToShow.wordsNumber}</p>
                    <p>
                        Five more used words:{" "}
                        {dataToShow.fiveMoreUsedWords.join(", ")}
                    </p>
                </div>
            </article>
            <article className=" container w-1/2 flex flex-col items-center text-left">
                <h2 className="container text-center w-1/4 first-letter:uppercase">
                    {dataToShow.user1}
                </h2>
                <div className="px-3 py-1">
                    <p>Words: {dataToShow.user1words}</p>
                    <p>
                        More used words:{" "}
                        {dataToShow.user1moreUsedWords.join(", ")}
                    </p>
                </div>
                <h2 className="container text-center w-1/4 first-letter:uppercase">
                    {dataToShow.user2}
                </h2>
                <div className="px-3 py-1">
                    <p>Words: {dataToShow.user2words}</p>
                    <p>
                        More used words:{" "}
                        {dataToShow.user2moreUsedWords.join(", ")}
                    </p>
                </div>
            </article>
            <article className=" container w-1/2 flex flex-col items-center text-left">
                <h2 className="container w-1/4 text-center">Comparison</h2>
                <div className="px-3 py-1">
                    <p>
                        {dataToShow.user1} wrote {dataToShow.user1words} words,
                        while {dataToShow.user2} wrote {dataToShow.user2words}{" "}
                        words.&nbsp;
                        {dataToShow.user1words > dataToShow.user2words
                            ? `${dataToShow.user1} wrote more words than ${dataToShow.user2}.`
                            : `${dataToShow.user2} wrote more words than ${dataToShow.user1}.`}
                    </p>
                </div>
            </article>
            <Chart
                chartType="PieChart"
                data={[
                    ["user", "words"],
                    [dataToShow.user1, dataToShow.user1words],
                    [dataToShow.user2, dataToShow.user2words],
                ]}
                options={{ title: "Sent words" }}
                width={"100%"}
                height={"400px"}
                className="container text-center"
            />
        </div>
    );
}

export default dataToShowComp;
