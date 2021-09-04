import {
	Avatar,
	Button,
	Card as MiuCard,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import "./Card.scss";
import Dotdotdot from "react-dotdotdot";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

function Card(props) {
	let { AlbumName, CardName } = useParams();
	const classes = useStyles();

	return (
		<div>
			{/* <div>Album</div>
			<h3>AlbumName: {AlbumName}</h3>
			<h3>CardName: {CardName}</h3> */}
			<MiuCard
				className={classes.root}
				style={{ height: "290px", width: "190px", margin: "auto" }}
			>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="65"
						image="https://picsum.photos/200/300"
						title="Contemplative Reptile"
					/>
					<Avatar
						alt="Vinh Quang Ngo"
						src="https://picsum.photos/200"
						style={{
							width: "100px",
							height: "100px",
							position: "absolute",
							top: "10px",
							left: "40px",
						}}
					/>
					<CardContent style={{ height: "120px", paddingTop: "50px" }}>
						<Typography
							gutterBottom
							variant="h6"
							component="a"
							style={{ textAlign: "center" }}
						>
							Vinh Quang Ngo
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							style={{ textAlign: "center", paddingBottom: "10px" }}
						>
							<Dotdotdot clamp={1}>Software Developer</Dotdotdot>
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							<Dotdotdot clamp={3}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem explicabo velit optio odit veritatis, debitis
								voluptatibus quia earum minima! Laborum quas architecto
								laudantium consequuntur odit. Ea suscipit repellendus et quos!
							</Dotdotdot>
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary" style={{ marginLeft: "23px" }}>
						About me
					</Button>
				</CardActions>
			</MiuCard>
		</div>
	);
}
export default Card;
