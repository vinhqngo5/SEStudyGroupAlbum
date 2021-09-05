import { Grid, makeStyles, Typography, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "Components/Card/Card";
import React from "react";
import { useParams } from "react-router";
import "./Album.scss";
import { Slide } from "react-slideshow-image";
import { CalculateSlideSize } from "utils/Caculators";
import SlideshowHOC from "Components/Common/SlideshowHOC";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function Album(props) {
	let { AlbumName } = useParams();

	return (
		<div className="inside-board-container">
			<div className="inside-board-container-section">
				<Typography
					variant="h4"
					style={{ fontWeight: "600", textAlign: "center" }}
				>
					BAN CHỦ NHIỆM
				</Typography>
				<SlideshowHOC cards={cards} style={{ paddingBottom: "30px" }} />
			</div>

			<Typography
				variant="h4"
				style={{ fontWeight: "600", textAlign: "center" }}
			>
				THÀNH VIÊN
			</Typography>
			<SlideshowHOC cards={cards} />
		</div>
	);
}

export default Album;
