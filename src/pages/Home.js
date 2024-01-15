import Header from "../components/Header";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import mobile from '../assets/images/mobile-apps.jpeg';
import desktop from '../assets/images/websites.png';
import cms from '../assets/images/cms.png';
import styles from  './Home.module.css';

const Home = () => {
  return(
    <>
    <Header />
    <h1>Welcome to TechFran</h1>
    <p className={styles.test}>A great idea for a mobile app? A project of a website? A CMS service?</p>
    <p>We have the expertise to make your dreams come true!</p>
    <p><strong><Link to="/contact">Contact us </Link></strong>and let's work together!</p>
    <div className={styles.imageContainer}>
      <img src={mobile} alt="" />
      <img src={desktop} alt="" />
      <img src={cms} alt="" />
    </div>
    <Footer />
    </>
  );
}

export default Home;