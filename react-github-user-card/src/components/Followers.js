import React from "react";

export default function Followers(props) {
	return (
		<div>
			{props.followers.map((item, index) => {
				return (
					<div key={index}>
						<h3>{item.login}</h3>
						<img src={item.avatar_url} alt="followers" />
						<div>
							<span>GitHub Url: {item.url}</span>
							<span>Portfolio: {item.html_url}</span>
							<span>Repo's: {item.repos_url}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
