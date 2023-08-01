import "./Feature.css";
import feature1 from '../Assets/Images/feature1.png';
import feature2 from '../Assets/Images/feature2.png';


const Feature = () => {
  return <section className="feature" data-aos="fade-up" >
    <div className="feature-details">
      <img src={feature1} alt="feature" width={400}></img>
      <div >
        <h5 className="spaceX">Get Featured</h5>
        <h2>let us show you off</h2>
        <p>Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.</p>
        <p>Oh, it's also 100% free.</p>
        <div>
        <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">Learn More</a></div>
      </div>
    </div>
    <div className="feature-details">
      <div>
        <h5 className="spaceX">SALARY CALCULATOR</h5>
        <h2>Know your worth</h2>
        <p>We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.</p>
        <div><a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">calculate your salary</a>
        </div>
      </div>
      <img src={feature2} alt="feature" width={400}></img>
    </div>
  </section> 
}

export default Feature
