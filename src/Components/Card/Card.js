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
	let rand = Math.floor(Math.random() * 10);
	let randNext = Math.floor(Math.random() * 10);
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
						image={`https://picsum.photos/20${rand}/30${rand}`}
						title="Contemplative Reptile"
					/>
					<Avatar
						alt="Vinh Quang Ngo"
						src={`https://picsum.photos/20${randNext}`}
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
							component="p"
							style={{
								textAlign: "center",
								fontSize: "1.1rem",
								// fonWeight: "600",
								marginBottom: "0",
							}}
						>
							Vinh Quang Ngo
						</Typography>
						<Dotdotdot clamp={2}>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
								style={{ textAlign: "center", paddingBottom: "10px" }}
							>
								Software Developer
							</Typography>
						</Dotdotdot>

						<Dotdotdot clamp={4}>
							<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem explicabo velit optio odit veritatis, debitis
								voluptatibus quia earum minima! Laborum quas architecto
								laudantium consequuntur odit. Ea suscipit repellendus et quos!
							</Typography>
						</Dotdotdot>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary" style={{ marginLeft: "26px" }}>
						About me
					</Button>
				</CardActions>
			</MiuCard>
		</div>
	);
}
export default Card;
