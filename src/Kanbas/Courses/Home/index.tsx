import ModuleList from "../Modules/List";
import React from "react";
import StatusList from "./StatusList";

function Home() {
    return (
        <div style={{ paddingRight:"10px", display: "grid", gridTemplateColumns: "1fr auto" }}>
            <div className="grid-item">
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className="grid-item" style={{ justifySelf: "end" }}>
                <StatusList />
            </div>
        </div>
    );
}

export default Home;
