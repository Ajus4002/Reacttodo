import React from "react";

function Footer(){
    const currentDate=new Date().getFullYear()
    return(
        <footer>
        <p>{currentDate}</p>
        </footer>
    )
}
export default Footer
