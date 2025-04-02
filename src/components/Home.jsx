import '../Style/Home.css'
import background from '../img/Prakash R-4.png.jpg'
export default function index(){
    return(<>
    <div class="Index" id="INDEX">

        <img src={background} alt="" />

      <div class="trans">
          <nav>
            <a class="butten3" href="https://www.instagram.com/prakash_rpk_yt/">
              <i class="fa-brands fa-instagram insta"></i></a>
            <a class="butten4" href="https://www.linkedin.com/in/rpkprakash/"
              ><i class="fa-brands fa-linkedin-in linkedin"></i></a>
            <a class="butten5" href="https://github.com/prakashRpk"
              ><i class="fa-brands fa-github github"></i></a>
          </nav>
        <h1 class="Index-headTitle-1">I AM</h1>
        <h1 class="Index-headTitle-2">PRAKASH . R</h1>
        <h2 class="Index-subTitle">Aspiring Full-Stack Developer</h2>
        <p class="Index-p-tag">
         I'm an aspiring full-stack developer passionate about creating
         innovative websites and applications. With a strong foundation in both
         front-end and back-end technologies, I aim to bring ideas to life
         through seamless, user-friendly digital experiences. Currently, I am
         honing my skills in HTML, CSS, JavaScript, and various backend
         frameworks, with the goal of developing my own projects and
         contributing to impactful tech solutions.
       </p>
        </div>

        <div class="box1 sb7">
          <a href="pdf/resume.html">U Want my resume</a>
        </div>

      </div>

    </>)
}