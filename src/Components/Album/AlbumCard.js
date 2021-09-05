import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router";
import "./AlbumCard.scss";
import { Button } from "@material-ui/core";
import Dotdotdot from "react-dotdotdot";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "inline-flex",
		height: "200px",
		minidth: "100%",
		marginBottom: "50px",
	},
	details: {
		display: "flex",
		width: "200px",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 280,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
}));

export default function AlbumCard() {
	let { AlbumCardName } = useParams();
	const classes = useStyles();
	const theme = useTheme();
	let rand = Math.floor(Math.random() * 10);
	let history = useHistory();
	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						Members
					</Typography>
					<Dotdotdot clamp={5}>
						<Typography
							variant="subtitle1"
							color="textSecondary"
							component="p"
							style={{ textAlign: "center" }}
						>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
							tenetur tempora id inventore, laborum nobis fugiat voluptates
							necessitatibus accusantium velit alias dolores eum sit. Inventore
							cupiditate rerum delectus nam praesentium.
						</Typography>
					</Dotdotdot>
				</CardContent>
				<div className={classes.controls}>
					<Button
						color="primary"
						onClick={() => {
							history.push("/home");
						}}
					>
						More
					</Button>
				</div>
			</div>
			<CardMedia
				className={classes.cover}
				image={`https://picsum.photos/50${rand}/20${rand}`}
				title="Lorem ipsum dolor sit amet"
			/>
		</Card>
	);
}
