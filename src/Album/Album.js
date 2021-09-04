import React from "react";
import { useParams } from "react-router";
import "./Album.scss";

function Album(props) {
	let { AlbumName } = useParams();

	return (
		<div>
			<div>Album</div>
			<h3>AlbumName: {AlbumName}</h3>
		</div>
	);
}

export default Album;
