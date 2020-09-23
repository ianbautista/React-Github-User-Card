import React from "react";
import GitHubCalendar, { container, username, options } from "github-calendar";

export default function CardMaker(props) {
	GitHubCalendar(".calendar", "ianbautista");

	// or enable responsive functionality:
	GitHubCalendar(".calendar", "ianbautista", { responsive: true });

	// Use a proxy
	GitHubCalendar(".calendar", "ianbautista", {
		proxy(username) {
			return fetch(`https://your-proxy.com/github?user=${username}`).then((r) => r.text());
		},
	});
	return (
		<div className="main-usercard">
			<div className="card">
				<div className="card-info-div">
					<img src={props.userData["avatar_url"]} alt="avatar" />
					<div className="card-info">
						<h3 className="name">{props.userData.name}</h3>
						<p className="username">{props.userData.login}</p>
						<p>{"Location: " + props.userData.location}</p>
						<p>
							<a href={props.userData["html_url"]}>
								{"Profile: " + props.userData["html_url"]}
							</a>
						</p>
						<p>{"Followers: " + props.userData.followers}</p>
						<p>{"Following: " + props.userData.following}</p>
						<p>{"Bio: " + props.userData.bio}</p>
					</div>
				</div>
				<img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" />
			</div>
			<div class="calendar"></div>
			{/* <img className="graph" src={`http://ghchart.rshah.org/${props.userData.login}`} alt="" /> */}
		</div>
	);
}
