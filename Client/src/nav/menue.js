import React from 'react';
import './menue.css'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import {Link} from "react-router-dom"
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
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

	    <div className='menuebar' style={toggle ? { height: '500px',width:'200px',minWidth:"150px" } : { height: '0',width:'0' }}  >
	                        <Link className='li' to={'/'}> <HomeIcon style={{ marginRight: '5px' }} />Home</Link>
				<Link className='li' to={'/projects'} >
					<MenuBookTwoToneIcon style={{ marginRight: '5px' }} />Projects
				</Link>
	    <Link className='li' to={'/articles'} ><LibraryBooksIcon style={{ marginRight: '5px' }} />Articles</Link>
				<Link to={""} className='li' ><InfoTwoToneIcon style={{ marginRight: '5px' }} />About</Link>
	    <p className='tol'>Quote Of the day: </p>
				<div className='tol'><p>we can do whatever we believe we can</p> <div className='circ'></div></div>
	    </div>
	    
    )
}
export default Menue_Bar;
