import './SignIn.css';
import glogo from '../Assets/Images/glogo.png';

const SignIn = () =>{

    return <section className='signin bg-light' data-aos="fade-up">
            <form className="signin-form">
                <input type="email" placeholder='Your Email'></input>
                <button type="submit" className='rounded bg-light title p-2 me-2 ddin'>Sign Up</button>
                <span className='sign-span'>Or</span>
                <button type="submit" className='rounded bg-light title p-2 me-2 ddin'><img src={glogo} alt="google logo" width="20px"></img>Sign Up with Google</button>
            </form>
            <div className='el'>
                <p>Looking to fund raise or invest in the next generation of great startups? AngelList Venture can now be found at AngelList.com.</p>
                <p>Already a user!!! Sign In here</p>
            </div>
            <div className='sign-desc'>
                <h1>130K + jobs</h1>
                <h1>6,000,000 Matches made</h1>
                <h1>8M + startup-ready candidates</h1>
            </div>
        </section>
}

export default SignIn;