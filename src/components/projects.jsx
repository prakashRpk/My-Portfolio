import {Nav} from 'react-bootstrap';
import '../Style/Projects.css'
import img1 from '../img/cards/html&css.jpg'
import Cards from '../json/cards.json'
import Programs from './programs'
export default function index(){
  <Programs Name={Cards} />
    return(<>
<div class="projects" id="projects">
      <div class="Pro screen">
      <h1 class="pro-title">Projects</h1>
      <div class="skills-taps">

      {Cards.map((item)=>
      <div class="container">
          <div class="card">
            <div class="imgBX"><img src={img1} alt="img"/></div>
            <div class="content">
              <h2>{item.title}</h2>
              <p>{item.des}</p>
              <Nav.Link href="#Projects/Programs">Projects</Nav.Link>
            </div>
          </div>
        </div>)}
        
      </div>
      </div>
    </div>

    </>)
}