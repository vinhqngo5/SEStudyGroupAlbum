import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AlbumCard from "./AlbumCard";
import "./Albums.scss";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		[theme.breakpoints.down("xs")]: {
			padding: "50px 50px 0 50px",
		},
		[theme.breakpoints.between("sm", "md")]: {
			padding: "50px 100px 0 100px",
		},
		"@media (min-width: 1280px)": {
			padding: "50px 50px 0 50px",
		},
	},

	control: {
		padding: theme.spacing(2),
	},
}));

const AlbumCards = [2, 2, 3];

function Albums(props) {
	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-evenly",
			}}
		>
			{AlbumCards.map((AlbumCardItem, index) => (
				<AlbumCard key={index} />
			))}
		</div>
	);
}

export default Albums;
