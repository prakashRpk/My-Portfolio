import '../Style/About.css'
export default function index(){
    let line = `My name is Prakash, and I am an aspiring full-stack developer with a strong passion for creating innovative websites and applications. I'm passed a Bachelor of Computer Science at Mary Matha College of Arts and Science in Theni and I'm currently studing Master of Computer Applications at RVS Arts and Science in Coimbatore.
      
      My journey in the tech world began with a fascination for how digital tools could bring ideas to life. Over the years, I've developed a solid foundation in both front-end and back-end technologies. My technical skills include HTML, CSS, JavaScript, and I have experience with programming languages like C and C++. I'm continuously learning and improving, currently working on mastering backend frameworks to build more complex and user-friendly applications.
      
      In addition to coding, I have a keen interest in design, photo editing, and video editing. These creative pursuits complement my technical skills, allowing me to approach projects with a unique blend of creativity and functionality.
      
      I’m always looking for opportunities to apply what I’ve learned by developing my own projects or collaborating on exciting tech solutions. I’m eager to connect with like-minded professionals and contribute to impactful projects that make a difference.
      
      Thank you for your time, and I look forward to connecting with you all.`
    return(<>
  <div class="ABOUT" id="ABOUT">
        <div class="AB screen">
        <h1 class="about-title">ABOUT</h1>
        <h2 class="About-subTitle">Hello</h2>
        <p class="About-p-tag">{line}</p>
        <button onclick="videoFun()">Self introduction</button>

        <div id="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dd-OEqh0P8o?si=3ETSCF04uoev2Yxg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

        </div>

  </div>



    </>)
}