import React from "react";
import axios from "axios";
import CardMaker from "./components/CardMaker";
import Followers from "./components/Followers.js";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: "ianbautista",
			userData: [],
			getFollowers: false,
			followers: [],
		};
	}
	componentDidMount() {
		axios
			.get(`https://api.github.com/users/${this.state.user}`)
			.then((response) => {
				this.setState({
					userData: response.data,
				});
			})
			.catch((error) => console.log(error));
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.getFollowers !== prevState.getFollowers) {
			axios
				.get(`https://api.github.com/users/${this.state.user}/followers`)
				.then((response) => {
					console.log(response.data);
					this.setState({ followers: response.data });
				})
				.catch((error) => console.log(error));
		}
	}

	handleFollowerChange = () => {
		this.setState({ getFollowers: true });
	};

	render() {
		return (
			<div>
				<h1>GitHub User Info</h1>
				<CardMaker
					userData={this.state.userData}
					handleFollowerChange={this.handleFollowerChange}
				/>
				<Followers followers={this.state.followers} />
			</div>
		);
	}
}

export default App;
