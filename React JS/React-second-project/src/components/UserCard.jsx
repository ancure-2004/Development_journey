import React from "react";
import ankurimg from "../assets/Ankur.jpg";
import "./UserCard.css";

const UserCard = (props) => {
	// -> recieving data
	return (
		<div className="user-container">
			<p id="username">{props.name}</p>
			<img id="userimg" src={props.image} alt={props.name}></img>
			<p id="userdesc">Description of {props.desc}</p>
		</div>
	);
};

export default UserCard;
