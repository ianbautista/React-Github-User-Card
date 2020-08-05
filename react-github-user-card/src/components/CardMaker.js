import React from "react";

export default function CardMaker(props) {
	return (
		<div className="main-usercard">
			<div className="card">
				<img src={props.userData["avatar_url"]} alt="avatar" />
				<div className="card-info">
					<h3 className="name">{props.userData.name}</h3>
					<p className="username">{props.userData.login}</p>
					<p>{"Location: " + props.userData.location}</p>
					<p>
						<a href={props.userData["html_url"]}>{"Profile: " + props.userData["html_url"]}</a>
					</p>
					<p>{"Followers: " + props.userData.followers}</p>
					<p>{"Following: " + props.userData.following}</p>
					<p>{"Bio: " + props.userData.bio}</p>
				</div>
			</div>
			<img className="graph" src={`http://ghchart.rshah.org/${props.userData.login}`} alt="" />
		</div>
	);
}
