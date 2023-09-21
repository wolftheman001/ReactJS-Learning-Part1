import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import journeyData from "./data/journeyData";

export default function App() {
    const appContent = journeyData.map(data => {
        return (
            <Main 
                key={data.id}
                {...data}
            />
        )
    })
    return (
        <div>
            <Nav />
            <div className="p-5">
                {appContent}
            </div>
        </div>
    )
}