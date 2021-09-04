import React from "react";
import { useParams } from "react-router";
import "./Card.scss";

function Card(props) {
	let { AlbumName, CardName } = useParams();

	return (
		<div>
			<div>Album</div>
			<h3>AlbumName: {AlbumName}</h3>
			<h3>CardName: {CardName}</h3>
		</div>
	);
}
export default Card;
