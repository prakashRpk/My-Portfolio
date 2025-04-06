import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';
import './Service.css'
function GroupExample() {
  function handleSubmit(){

  }
  return (<>
    <div id='Service'>
      <h1>service</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Fullname <span>*</span></label><br />
        <input type="text" /><br />
        <label htmlFor="">Moblie number <span>*</span></label><br />
        <input type="number" /><br />
        <label htmlFor="">Gmail Address <span>*</span></label><br />
        <input type="mail" /><br />
        <label htmlFor="">choose the project type <span>*</span> </label><br />
        <select name="" id="">
          <option value="c++">c++</option>
          <option value="">c</option>
          <option value="">Java</option>
          <option value="">python</option>
          <option value="">html & css</option>
          <option value="">front end</option>
          <option value="">full stack</option>
        </select><br />
        <label htmlFor="">What kind of project u want ? <span>*</span></label><br />
        <textarea name="" id="" rows={3}></textarea><br />
        <input type="submit" className='btn'/>
      </form>
    </div>
    </>);
}

export default GroupExample;