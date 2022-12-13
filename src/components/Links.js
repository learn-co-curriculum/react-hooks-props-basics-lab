// import React from "react";
import user from "../data/user";

function Links({color}) {
    return (
        <div>
            <p style={{color}}>{user.links.github}</p>
        </div>
    )
}

export default Links;