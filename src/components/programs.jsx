import {Nav} from 'react-bootstrap';
import '../Style/html.css'
import Html from '../json/html&css.json'
export default function Programs({name}){
  console.log(name)
    return(<>

<div class="Html" id="Html">
      <div class="Pro screen">
      <h1 class="pro-title">{name}</h1>
      <div>
      <ul class="skills-taps">
        {Html.map((item)=><><li id='list'>
         <span>{item['Project-Name']}</span> 
            <span><a href={item['git-link']}>Code</a></span> 
            <span><a href={item.output}>Output</a></span> 
            <span><a href={item.explanation}> Explanation</a></span>
             </li><br /><br /></>)}
      </ul>
      </div>
      </div>
    </div>

    </>)
}