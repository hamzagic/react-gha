import Header from '../components/Header';
import Footer from '../components/Footer';

import './Contact.module.css';

const Contact = () => {
  return(
    <>
    <Header />
    <h1>Contact Us</h1>
    <form>
      <input type="text" placeholder='Your Name' />
      <input type="email" placeholder='Email' />
      <textarea placeholder='Your message' rows="10" cols="50"></textarea>
      <button type='button'>Submit</button>
    </form>
    <Footer />
    </>
  );
}

export default Contact;