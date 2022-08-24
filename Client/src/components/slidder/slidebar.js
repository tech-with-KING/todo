
import React, { Component } from 'react';
import Card_componnt from '../cardbar/cardbar';
import './slidebar.css'
import AddTodo from '../modalbox/modalbox'
class Slide_Bar extends Component {    
    render() {
	
	    const {toggle,set_toggle}=this.props
        return (  
		<div className="slideshow-container">

		<div className='hello'>
		<ul>
		<li>Todo</li>
		<li>Tasks</li>
		<li>Projects</li>
		<li>About Us</li>
		<li>Completed</li>

		
		</ul>
		</div>
                <Card_componnt toggle={toggle} set_toggle={set_toggle} />
		{/*<AddTodo/>*/}
		</div>
        
 );
    }
}
 
export default Slide_Bar;
