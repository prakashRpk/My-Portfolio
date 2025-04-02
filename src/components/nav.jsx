import {Nav} from 'react-bootstrap';
import '../Style/Nav.css'
export default function index(){
    return(<>
    <div className='Nav'>
    <div className="circal"></div>
    <ul class="index-ul">

    <li><Nav.Link href="#Home">Home</Nav.Link></li>
    <li><Nav.Link href="#About">About</Nav.Link></li>
    <li><Nav.Link href="#Projects">Projects</Nav.Link></li>
</ul>

<div class="Index-circle" id="Index-circle"></div>

<i class="fa-solid fa-caret-left" onclick="hidemain()"></i>
<i class="fa-solid fa-bars" onclick="nav()"></i>

    </div>

    </>)
}