
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import "./works.css"

function works(){
    return(
        <main className="view-job">
            <h2>Job Details</h2>
            <div className="card-view">
                <div className='card-view'>
                <div id='img2'></div>
                <div className='card-title'>
                <h2>Sr. UX Designer</h2>
                <p>Google</p>
                </div>
                
                </div>
                <div className='card-inf-view'>
                    <p><FaLocationDot/> New York</p> <p><IoSchoolSharp/> 3 years exp.</p> <p><FaClock/> Fulltime</p>
                </div>
                
                <div className='card-bottom'>
                    <p>Posted 2 days ago</p>
                    <h3>$50K/mo</h3>
                </div>
            </div>
            <div className="job-desc">
                <div className="job-desc-top">
                    <div id="img3"></div>
                    <h2>Job Description</h2>
                </div>
                    <p className="desc">In a UX Designer job. you'll need both types of skills to develop the next generation of products.</p>
                
            </div>
            <div className="job-desc">
                <div className="job-desc-top">
                    <div id="img3"></div>
                    <h2>Skills & Requirements</h2>
                </div>
                <ul className="list-view">
                    <li>3 years experience.</li>
                    <li>Degree in Computer Science. Psychology.</li>
                    <li>Prociency in User Persones.</li>
                </ul>
                
            </div>
            <div className="job-desc">
                <div className="job-desc-top">
                    <div id="img3"></div>
                    <h2>Your</h2>
                </div>
                    <p className="desc">In a UX Designer job. you'll need both types of skills to develop the next generation of products.</p>
                
            </div>
        </main>
    )
}

export default works;