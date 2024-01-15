import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import team from '../assets/images/devs.png';

const About = () => {
  return(
    <>
    <Header />
    <h1>About Us</h1>
    <p>We are a team of developers with great experience in both web and mobile development.</p>
    <p>Our mission is making your project come to life in the fastest time possible. For that, we rely on our expertise in good planning and implementing strategies.</p>
    <p><Link to="/contact">Contact us</Link> for more information.</p>
    <div className={styles.imageContainer}>
      <img src={team} alt="" />
    </div>
    <Footer />
    </>
  );
}

export default About;