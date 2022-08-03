import React, { Component } from 'react';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import "./cardbar.css"
import {motion} from 'framer-motion'
class Card_componnt extends Component {
    state = {  } 
    render() { 
	const {toggle,set_toggle}=props
	const set_style = ()=>
       {
	   const style = { fontSize: '30px', fontWeight: 'bold', transition: "0.5s ease-in" }
	   if(!toggle){return(<MenuIcon style = {style} />)}else{return( <ClearTwoToneIcon style = {style} />)}
       }
	const make_menue_toggle=()=>{
	set_toggle()
    }
        return (
        <>
		<div className="card_to" style={{minHeight:'400px'}}>
		   <div className='ico'onClick={()=>{make_menue_toggle()}} >
	    {set_style()}
        </div>
<div>                <h2>TODO</h2></div>
                <p className="title">CEO & co-Founer, Algophile.com</p>
				<p>
		I am a react front end developer with three years of working experience
	         I have collaborated on many team projects and have enjoyed working on all these projects
		</p>
                <div  className='ba'>
                </div>
                <p></p>
            </div>
       </>
        );
    }
}
 
export default Card_componnt;
