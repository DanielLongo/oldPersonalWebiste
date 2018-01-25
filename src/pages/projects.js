import React,{Component} from 'react';
import { Card,Row,Col } from 'antd';

class Projects extends Component {
	constructor(props) {
		super(props)
		console.log(props.projects)
		 //can't setState projects
		 this.projects = props.projects
		console.log(this.state)
	}
	state = {
		projects : null,
		projectCards : null,
	}

	componentDidMount() {
		{this.renderProjectCards()}
	}

	renderProjectCards() {
		let projectCards = (
			<Row gutter={16}>
				{this.projects.map((project,index) => {
					var cardColor = String(+ Math.floor(Math.random() * (359 - 0 + 1)) + 1) //sets card colors to random
					return (
						<Col style={{marginTop:16}} span={8}>
							<a href={"/projects/" + project.title}>
							<Card style={{background:"hsl(" + cardColor + ",34%,80%)"}} key={index} title={project.title}>
								<p> Category: {project.category} </p>
								<p> Last Updated: {project.date} </p>
							</Card>
							</a>
						</Col>)
				})}
			</Row>
		);
		this.setState({projectCards:projectCards})
	}

	// let projectCards = this.renderProjectCards()
	render() {
		return(
			<div>
			<p>Projects</p>
			{this.state.projectCards}
			</div>
		)
	}
}

export default Projects