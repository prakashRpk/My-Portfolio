import './Home.css'
import img from '../img/img1.jpg'
export default function Home(){
    return(<>
        <div id='home'>
        <img src={img} alt=""  />
        <div>
        <h1>im prakash</h1>
        <p>I'm an aspiring full-stack developer passionate about creating innovative websites and
applications. With a strong foundation in both front-end and back-end technologies, I aim to bring
ideas to life through seamless, user-friendly digital experiences. Currently, I am honing my skills in HTML,
CSS, JavaScript, and various backend frameworks, with the goal of developing my own projects and
contributing to impactful tech solutions</p>
<hr />
<h3>Education</h3> <br />
<h6>MCA - Master of Computer Application (2024-2027) </h6>
<p>RVS college of arts and science - sulur</p>
<br />
<h6>Bsc(cs) - Computer Science (2021- 2024)</h6>
<p>Mary Matha college of arts and science - Theni</p>
<hr />
<h3>Contact</h3>
<p><b>Phone Number : </b>+91 6383685305</p> <p><b>Gmail : </b> mrprakash08112004@gmail.com</p>
        </div>
        </div>
    </>)
}