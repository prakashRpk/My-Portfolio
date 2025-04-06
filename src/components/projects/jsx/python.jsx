import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../style/projects.css'
import python from '../json/python.json'

function GroupExample() {
  return (
    <div id='program'>
      <h1>Python</h1>
      {python.map((item,index)=><div id="layout">
        <div id='list'>
        <span> <span>{index+1}</span>{item['Project-Name']}</span>
        <div id='links'>
        <span><a href={item['git-link']}>Link</a></span>
        <span><a href={item['output']}>output</a></span>
        <span><a href={item['explanation']}>explanation</a></span>
        </div>
        <img src={item['output-img']} alt="" />
        </div>
      </div>)}
    </div>
  );
}

export default GroupExample;