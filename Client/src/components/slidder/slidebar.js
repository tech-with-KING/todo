import React, { Component } from 'react';
import Card_componnt from '../cardbar/cardbar';
import './slidebar.css'
class Slide_Bar extends Component {    
    render() {
	
	    const {toggle,set_toggle}=props
        return (  
		<div className="slideshow-container">
		<div className='hello'></div>
                <Card_componnt toggle={toggle} set_toggle={set_toggle} />
            </div>
        
 );
    }
}
 
export default Slide_Bar;
