import React from "react";

export default function Followers(props) {
	return (
		<>
			<button className="follower-btn" onClick={() => props.handleFollowerChange()}>
				Followers{" "}
				<span>
					<i class="fas fa-caret-down"></i>
				</span>
			</button>
			<div className="follower-div">
				{props.followers.map((item, index) => {
					return (
						<div className="followerCard" key={index}>
							<img src={item.avatar_url} alt="followers" />
							<h3>{item.login}</h3>
						</div>
					);
				})}
			</div>
		</>
	);
}
