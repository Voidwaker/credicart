import react from "react";

function header () {
    return (
        <header>
            <nav>
                <h1>CrediCart</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/produkter">Products</a></li>
                    <li><a href="/om-oss">Cart</a></li>
                    <li><a href="/kontakt">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default header;