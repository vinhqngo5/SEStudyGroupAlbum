import React from "react";
import {
	Breadcrumbs,
	Chip,
	emphasize,
	Typography,
	withStyles,
} from "@material-ui/core";
import { Home, ExpandMore } from "@material-ui/icons";
import "./Board.scss";

const StyledBreadcrumb = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.grey[100],
		height: theme.spacing(3),
		color: theme.palette.grey[800],
		fontWeight: theme.typography.fontWeightRegular,
		"&:hover, &:focus": {
			backgroundColor: theme.palette.grey[300],
		},
		"&:active": {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(theme.palette.grey[300], 0.12),
		},
	},
}))(Chip);

function Board(props) {
	const handleClick = () => {};
	return (
		<div className="bht-album-board">
			<Breadcrumbs aria-label="breadcrumb">
				<StyledBreadcrumb
					component="a"
					href="#"
					label="Home"
					icon={<Home fontSize="small" />}
					onClick={handleClick}
				/>
				<StyledBreadcrumb
					component="a"
					href="#"
					label="Catalog"
					onClick={handleClick}
				/>
				<StyledBreadcrumb
					label="Accessories"
					deleteIcon={<ExpandMore />}
					onClick={handleClick}
					onDelete={handleClick}
				/>
			</Breadcrumbs>
		</div>
	);
}

export default Board;
