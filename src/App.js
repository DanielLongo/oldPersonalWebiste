import React, { Component } from 'react';
import {Switch,Route,BrowserRouter } from 'react-router-dom'
import Header from './components/header';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Explorations from './pages/explorations'

import './App.css';
let project0 = {title:"Test Project",date:"Dec-17-2017",category:"Testing"}
class App extends Component {

	state = {
		projects : [project0,project0,project0,project0],
	}

	// initProjectPages() {
		// this.state.projects.map((project,index)
		// 	let projectClass = project.title.replace(/\s/g, '') 
			// import projectClass from './pages/projects/ '+ projectClass +''
	// 	 	) <Route exact path='/pro'
	// }
	//for details on router and params https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

	// const Project = () => (
	// 	<Switch>
	// 		<Route exact path='/projects' component={() => (<p>Projects</p>)} </Route>
	// 		<Route exact path='/projects/:project_name' component={() => (<p>match.params.project_name</p>)} </Route>
	// 	</Switch>
	// )

	render() {
		return (
			<div>
				<Header/>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={() => (<Home projects={this.state.projects}/>)} />
						<Route exact path='/home' component={() => (<Home projects={this.state.projects}/>)} />
						<Route exact path='/projects' component={() => (<Projects projects={this.state.projects}/>)}/>
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/explorations' component={Explorations} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
