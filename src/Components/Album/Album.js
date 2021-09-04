import { Grid, makeStyles } from "@material-ui/core";
import Card from "Components/Card/Card";
import React from "react";
import { useParams } from "react-router";
import "./Album.scss";
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

const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Album(props) {
	const classes = useStyles();
	let { AlbumName } = useParams();

	return (
		<div>
			{/* <div>Album</div>
			<h3>AlbumName: {AlbumName}</h3>

			{Cards.map((card) => (
				<Card />
			))} */}
			<Grid container className={classes.root} spacing={2}>
				<Grid item sm={false} xs={false} md={false} lg={1} />
				<Grid item sm={12} xs={12} md={12} lg={10}>
					<Grid container justifyContent="center" spacing={5}>
						{Cards.map((value) => (
							<Grid key={value} item xs={12} sm={6} md={3} lg={3}>
								<Card />
							</Grid>
						))}
					</Grid>
					<Grid item sm={false} xs={false} md={false} lg={1} />
				</Grid>
			</Grid>
		</div>
	);
}

export default Album;
