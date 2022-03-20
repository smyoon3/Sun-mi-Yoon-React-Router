// import css
import './../assets/css/App.css';
//import nav
import Header from "./../components/Header";
// import image
import dogImage from './../assets/images/dog.jpeg';

export default function About() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <h2 class="about">About</h2>
        <img class="homeImage" src={dogImage} alt="aboutImage"/>
      </main>
    </div>
  );
}

