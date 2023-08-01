import './Talent.css';
import gottalent from '../Assets/Images/talent.png';
import needtalent from '../Assets/Images/talent1.png';

const Talent = () =>{
    return <section className='talent' data-aos="fade-up">
        <div className='got-talent'>
            <div className='img'>
                <img src={gottalent} alt='need talent' width={500}></img>
            </div>
            <div className='description'>
                <h5>Got Talent ?</h5>
                <h2 className='spaceX'>Why Job Seekers Love Us</h2>
                <div>
                    <div>Unique jobs at startups and tech companies you can't find anywhere else</div>
                </div>
                <div>
                    <div>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</div>
                </div>
                <div>
                    <div>Everything you need to know to job search - including seeing salary and stock options upfront when looking</div>
                </div>
                <div>
                    <div>Connect directly with founders at top startups - no third party recruiters allowed</div>
                </div>
                <div>
                    <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">Learn More</a>
                    <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">Sign Up Now</a>
                </div>
            </div>
            
        </div>
        <div className='need-talent'>
            <div className='description'>
                <h5>Need Talent ?</h5>
                <h2 className='spaceX'>Why Recruiters Love Us</h2>
                <div>
                    <div>8 million responsive and startup-ready candidates, with all the information you need to vet them</div>
                </div>
                <div>
                    <div>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</div>
                </div>
                <div>
                    <div>A free applicant tracking system, or free integration with any ATS you may already use</div>
                </div>
                <div>
                    <div>Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.</div>
                </div>
                <div>
                    <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">Learn More</a>
                    <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href="#home">Sign Up Now</a>
                </div>
            </div>
            <div className='img'>
                <div>
                    <img src={needtalent} alt='need talent' width={500}></img>
                </div>
            </div>
        </div>
    </section>
}

export default Talent