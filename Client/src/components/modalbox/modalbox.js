import React, { Component } from 'react';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import "./modalbox.css"
import {motion} from 'framer-motion'
class AddTodo extends Component {
    state = {  } 
    render() { 
	const {toggle,set_toggle}=this.props
	const set_style = ()=>
       {
	   const style = { fontSize: '30px', fontWeight: 'bold', positin:'absolute',left:'0',backgroud:'red' }
	   return( <ClearTwoToneIcon style={style}/>)
       }
	const make_menue_toggle=()=>{
	set_toggle()
    }
        return (
        <>
		<div className="addTodo" style={{minHeight:'400px'}}>
		
		<div className='ba'onClick={()=>{make_menue_toggle()}} >
		<h2>Add Task</h2>
		{set_style()}
            </div>
		<div className='todo_form_container'>
		<div className='todo_form'><button className='button' >task :</button><input placeholder='task ...'/></div>
		<div className='todo_form' ><button className='button'>start-time :</button><input placeholder='start time...'/></div>
		<div className='todo_form'><button className='button'>finish-time :</button><input placeholder='finish time...'/></div>
		<div className='notes'><button>notes :</button><input className='note' placeholder='notes...'/></div>

		</div>
		
		<div className='add_btn'><button>Add</button></div>
            </div>
       </>
        );
    }
}
 
export default AddTodo;
