import './Reviews.css'
import quote from '../Assets/Images/quote.png';

const Reviews = () =>{
    return <section className="reviews bg-light" data-aos="fade-up">
        <h5>Don't Just Take It From Us</h5>
        <h2 className="spaceX">From Our Users</h2>
        <div className='user-reviews'>
            <div className='quote'>
                <img src={quote} alt="quote" width={20}></img>
                <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! 
                Pays well, great culture, and unlimited PTO.</p>
            </div>
            <div className='quote'>
                <img src={quote} alt="quote" width={20}></img>
                <p>I love Wellfound (AngelList Talent). I got my current job at a startup entirely through
                 the site last year - it's super easy to use and I love the UI.</p>
            </div>
            <div className='quote'>
                <img src={quote} alt="quote" width={20}></img>
                <p>I can't imagine my day to day without this platform. Life would be a lot more difficult.</p>
            </div>
            <div className='quote'>
                <img src={quote} alt="quote" width={20}></img>
                <p>Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product
                 for anyone looking for startup talent..</p>
            </div>
        </div>
    </section>
}

export default Reviews;