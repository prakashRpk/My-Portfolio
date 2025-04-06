import { useEffect } from "react"
import './Style.css'
export default function index(){
    let unicode =[
        "fa-brands fa-square-js",
        "fa-brands fa-node",
        "fa-brands fa-vuejs",
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fa-brands fa-react"
    ]
    let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let arr1= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let icon
    return(<>
    <body>
        <div className="box">
            <div className="group">
            {arr.map((item,index)=>
            <div id="iconContainer" className={`iconContainer${index}`}>
                {arr1.map(()=><i className={unicode[icon = Math.floor(Math.random()*6)]}></i>)}
            </div>)}
            </div>
        </div>
    </body>
    </>)
}