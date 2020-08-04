import React from "react"

export default function cardMaker(info) {


	return (
        <div className="card">
            <img src={"info.data["avatar_url"]"} alt="avatar"/>
            <div className="card-info">
                <h3 className="name">{info.data.name}</h3>
                <p className="username">{info.data.login}</p>
                <p>{"Location: " + info.data.location;}</p>
                <p><a href={info.data["html_url"]}>{"Profile: " + info.data["html_url"];}</a></p>
                <p>{"Followers: " + info.data.followers}</p>
                <p>{"Following: " + info.data.following}</p>
                <p>{"Bio: " + info.data.bio}</p>
            </div>
        </div>
    )
}
