import React from 'react';
import './menue.css'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import {Link} from "react-router-dom"
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Check, CheckBox, Sync, SyncAlt } from '@mui/icons-material';
const Menue_Bar=(props)=>{
    const {toggle}=props
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
  }
    return(
	<div className = "top_bar">
	    <div className='navbar' >
	    <Link className='li' to={'/'}> <Check style={{ marginRight: '5px' }} />Tasks</Link>
	    <Link className='li' to={'/completed'}> <CheckBox style={{ marginRight: '5px' }} />Completed</Link>
	    <Link className='li' to={'/sync_now'}> <Sync style={{ marginRight: '5px' }} />Sync Now</Link>
	    </div>
	    </div>
    )
}
export default Menue_Bar;
