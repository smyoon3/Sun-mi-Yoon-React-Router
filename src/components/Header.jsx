// import css
import './../assets/css/App.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div class="heading">
            <h1 class="title">Sun mi Yoon</h1>
            <nav class="nav" 
            >
                <Link class="nav-item" to="/">Home</Link> <span class="desktop-navitem">|</span>{" "}
                <Link class="nav-item" to="/about">About</Link> <span class="desktop-navitem">|</span>{" "}
                <Link class="nav-item" to="/projects">Projects</Link> <span class="desktop-navitem">|</span>{" "}
                <Link class="nav-item" to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

