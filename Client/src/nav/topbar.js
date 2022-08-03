import React from 'react';
import "./tobar.css"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
const Top_bar=(props)=>{

    const make_menue_toggle=()=>{
	set_toggle()
    }
    const set_style = ()=>
       {
	   const style = { fontSize: '30px', fontWeight: 'bold', transition: "0.5s ease-in" }
	   if(!toggle){return(<MenuIcon style = {style} />)}else{return( <ClearTwoToneIcon style = {style} />)}
       	}
    return(
	    <div className='top_bar'>

	    <div className='navbar' >
	    <div className='ico'onClick={()=>{make_menue_toggle()}} >
	    {set_style()}
        </div>
	    <h2>Cosmic Shool</h2>
	    <div className='light'>
	        <DarkModeIcon />
	    </div>
	    </div>

	</div>     
    )
}
export default Top_bar;
