import { Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import "./Album.scss";
import SlideshowHOC from "Components/Common/SlideshowHOC";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Album(props) {
	let { AlbumName } = useParams();

	return (
		<>
			<div className="inside-board-container-section">
				<Typography
					variant="h4"
					style={{ fontWeight: "600", textAlign: "center" }}
				>
					BAN CHỦ NHIỆM
				</Typography>
				<SlideshowHOC cards={cards} style={{ paddingBottom: "30px" }} />
			</div>
			<div
				style={{
					backgroundColor: "#f4f5ff",
					width: "100vw",
					marginLeft: "calc(-50vw + 50%)",
				}}
			>
				<div
					className="inside-board-container-section"
					style={{ padding: "75px 50px" }}
				>
					<Typography
						variant="h4"
						style={{ fontWeight: "600", textAlign: "center" }}
					>
						THÀNH VIÊN
					</Typography>
					<SlideshowHOC cards={cards} />
				</div>
			</div>
		</>
	);
}

export default Album;
