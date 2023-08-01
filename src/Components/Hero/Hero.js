import classes from './Hero.module.css';
const HeroSection = () => {
 
  return (
    <section id='hero' className={classes["hero-section"]}>
        <div className={classes["hero-text-container"]}>
          <div className={classes["flex-center"]}>
          <span className="spaceX text-black" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="500">AngelList Talent is now </span>
          <h1 className={classes["title-user"]} data-aos="fade-up"  data-aos-delay="1000" data-aos-duration="1000"> Well<span className="title">Found</span></h1>
          <span className="spaceX text-black" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000">Where startups and job seekers connect.</span>
          <span className="spaceX text-light" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000"> Passionate about changing the world with technology.
          </span>
          <div className="col">
            <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">Find Your Next Hire</a>
            <a target='blank'  className='rounded bg-light title p-2 me-2 ddin' href="#home">Find Your Next Job</a>
          </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
