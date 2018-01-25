import React, { Component } from 'react';
import {Menu,Icon} from 'antd';
import { Link } from 'react-router-dom'
class Header extends Component {

	handleItemSeleceted(e) {
		console.log(e.key)
	}

	render() {
		return(
			<Menu
			onClick={this.handleItemSeleceted}
			mode="horizontal">
				<Menu.Item key="home">
					<a href="/"><Icon type="home" /> Home</a>
				</Menu.Item>
				<Menu.Item key="projects">
					<a href="/projects"><Icon type="rocket" /> Projects</a>
				</Menu.Item>
				<Menu.Item key="explorations">
					<a href="/explorations"><Icon type="bulb" /> Explorations</a>
				</Menu.Item>
				<Menu.Item key="contact">
					<a href="/contact"><Icon type="user-add" /> Contact</a>
				</Menu.Item>

			</Menu>
		)
	}
}

export default Header;