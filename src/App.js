import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title"> React Service App </h1>{' '}
				</header>{' '}
				<p className="App-intro">
					To get started, edit <code> src / App.js </code> and save to reload.{' '}
				</p>{' '}
				<p>
					<Button bsStyle="primary"> Yippee!A Primary Button </Button>{' '}
				</p>{' '}
			</div>
		)
	}
}

export default App
