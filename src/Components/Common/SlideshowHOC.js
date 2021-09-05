import { Grid, makeStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import { CalculateSlideSize } from "utils/Caculators";
import { Slide } from "react-slideshow-image";
import Card from "Components/Card/Card";

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

const Slideshow = (props) => {
	const { width, cards } = props;
	const classes = useStyles();
	let slideSize = CalculateSlideSize(width);

	const cardLists = [];
	const cloneCards = [...cards];

	while (cloneCards.length > 0) {
		if (cloneCards.length > slideSize) {
			cardLists.push(cloneCards.splice(0, slideSize));
		} else cardLists.push(cloneCards.splice(0));
	}

	return (
		<div>
			<Slide easing="ease" indicators>
				{cardLists.map((cardListItem, index) => (
					<Grid key={index} container className={classes.root} spacing={2}>
						<Grid item sm={false} xs={false} md={false} lg={1} />
						<Grid item sm={12} xs={12} md={12} lg={10}>
							<Grid container justifyContent="center" spacing={5}>
								{cardListItem.map((value) => (
									<Grid key={value} item xs={12} sm={6} md={3} lg={3}>
										<Card />
									</Grid>
								))}
							</Grid>
							<Grid item sm={false} xs={false} md={false} lg={1} />
						</Grid>
					</Grid>
				))}
			</Slide>
		</div>
	);
};

Slideshow.propTypes = {
	width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

const SlideshowHOC = withWidth()(Slideshow);
export default SlideshowHOC;
