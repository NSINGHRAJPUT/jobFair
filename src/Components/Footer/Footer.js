import './Footer.css';
import twitter from '../Assets/Images/twitter.png';
import insta from '../Assets/Images/insta.png';

const Footer = () => {
  return <footer className='footer bg-light' data-aos="fade-up" >
      <div>
        <h2 className='spaceX'>Wellfound <span> : </span></h2>
        <a href='#home'><img src={twitter} alt='twitter' width={40}></img></a>
        <a href='#home'><img src={insta} alt='twitter' width={40}></img></a>
      </div>
      <div className='footer-links'>
        <div>
          <h5>For Candidates</h5>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
        </div>
        <div>
          <h5>For Recruiters</h5>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
        </div>
        <div>
          <h5>Company</h5>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
        </div>
      </div>
  </footer>
}

export default Footer
