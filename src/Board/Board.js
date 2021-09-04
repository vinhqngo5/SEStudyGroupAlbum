import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import { Home, ExpandMore } from "@material-ui/icons";
import "./Board.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Album from "Album/Album";
import Card from "Card/Card";
import Albums from "Album/Albums";
import StyledBreadcrumbLink from "Common/StyledBreadcrumbLink";

function Board(props) {
	const handleClick = () => {};
	return (
		<div className="bht-album-board">
			<Router>
				<Breadcrumbs aria-label="breadcrumb">
					<StyledBreadcrumbLink
						component="a"
						to="/"
						label="Home"
						icon={<Home fontSize="small" />}
						onClick={handleClick}
					/>
					<StyledBreadcrumbLink
						component="a"
						to="/album"
						label="AlbumName"
						onClick={handleClick}
					/>
					<StyledBreadcrumbLink
						to="/album/card"
						label="CardName"
						deleteIcon={<ExpandMore />}
						onClick={handleClick}
						onDelete={handleClick}
					/>
				</Breadcrumbs>

				<Switch>
					<Route path="/:AlbumName/:CardName" children={<Card />} />
					<Route path="/:AlbumName" children={<Album />} />
					<Route path="/" children={<Albums />} />
				</Switch>
			</Router>
		</div>
	);
}

export default Board;
