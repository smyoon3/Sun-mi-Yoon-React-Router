// add nav
import Header from "./components/Header";
// import css
import './assets/css/App.css';
// import image
import catImage from './assets/images/cat1.jpeg';

export default function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: "1rem 0" }}>
        <h2>Welcome</h2>
        <img class="homeImage" src={catImage} alt="homeImage"/>
      </main>
    </div>
  );
}
