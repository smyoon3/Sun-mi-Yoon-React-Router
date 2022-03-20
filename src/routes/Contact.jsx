// import css
import './../assets/css/App.css';
// import nav
import Header from "./../components/Header";
// import image
import rabbitImage from './../assets/images/rabbit.jpeg';

export default function Contact() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <h2>Contact</h2>
        <img class="homeImage" src={rabbitImage} alt="contactImage"/>
      </main>
    </div>
  );
}
