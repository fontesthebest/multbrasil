import "./header.css"
import { DiApple } from "react-icons/di";

function header() {
    return(
        <div >
            <header className="header">
                <h2>Marcelo Rosa <DiApple/></h2>
                <div id="img"></div>
            </header>
        </div>
    )
}

export default header;