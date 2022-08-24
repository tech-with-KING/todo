import React, { Component } from 'react';
import './App.css';
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import Menue_Bar from './nav/menue'
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"
class App extends Component {
	state = {
		toggle:false
	}

	render() {
	    const { toggle } = this.state
	    const set_toggle =()=>{toggle?this.setState({toggle:false}):this.setState({toggle:true})}
		return (
			<>
			<Router>
			<Top_Bar /><Menue_Bar/>
			<Routes>
			<Route path="/add_todo" element={<Slide_Bar toggle={toggle} set_toggle={set_toggle}/>} />
			<Route path="/" element={<><Slide_Bar/></>} />
		    </Routes>
		 </Router>

			</>
		);
	}
}

export default App;
