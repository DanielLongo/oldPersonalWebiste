import React,{Component} from 'react';
import {Button,Icon,Carousel,Card} from 'antd';

class Home extends Component {
	constructor(props) {
		super(props)
		this.projects = props.projects
		this.projectCards = []
	}

	state = {
		projectCarousel : null
	}

	componentDidMount() {
		{this.renderProjectCarousel()}
	}
	renderProjectCarousel() {
		this.projects.map((project,index) => {
			var cardColor = String(+ Math.floor(Math.random() * (359 - 0 + 1)) + 1) //sets card colors to random
			var addCard = (
				<a href={"/projects/" + project.title}>
				<Card style={{background:"hsl(" + cardColor + ",34%,80%)"}} key={index} title={project.title}>
					<p> Category: {project.category} </p>
					<p> Last Updated: {project.date} </p>
				</Card>
				</a>
			)
			console.log("add card")
			console.log(typeof([addCard]))
			console.log(this.projectCards)
			this.projectCards = (this.projectCards).concat([addCard])

		})

		let projectCarousel = (
		<Carousel autoplay>
			{this.projectCards.map((project,index) => {
				return (
				<div>
					{project}
				</div>
				)
			})}
		</Carousel>
		)

		this.setState({projectCarousel:projectCarousel})
	}

	render() {
		return (
			<div style={{marginLeft:'10%',marginTop:'5%'}}>
				<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gtreview.com%2Fwp-content%2Fuploads%2F2014%2F11%2FSky-Clouds.jpg&imgrefurl=https%3A%2F%2Fwww.gtreview.com%2Fsky-and-clouds%2F&docid=RslVpghjZHR-eM&tbnid=9aSEba8GiDNX_M%3A&vet=10ahUKEwirtZDmifDYAhUK5mMKHYarC6oQMwiRAigYMBg..i&w=3456&h=2304&bih=639&biw=1164&q=clouds&ved=0ahUKEwirtZDmifDYAhUK5mMKHYarC6oQMwiRAigYMBg&iact=mrc&uact=8"/>
				<h2 style={{marginTop:'1%'}}>About Me</h2>
				<p>About Me............</p>
				<h2 style={{marginTop:'1%'}}>Projects</h2>
				<p>Render Preview of projects</p>
				<a href="/projects"><Button style={{marginBottom:'3%'}}><Icon type="rocket" /><p> See More Projects</p></Button></a>
				{this.state.projectCarousel}
				<h2 style={{marginTop:'1%'}}>Exlorations</h2>
				<p>Explain Explorations</p>
				<a href="/explorations"><Button><Icon type="bulb" /><p>Explore</p></Button></a>
				
				<a href="/contact"><Button type='danger' style={{marginLeft:'40%'}}><p> <Icon type="user-add" /> Contact</p></Button></a>
			</div>
		)
	}
}

export default Home;