import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import { Home, ExpandMore } from "@material-ui/icons";
import "./Board.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Album from "Components/Album/Album";
import Card from "Components/Card/Card";
import Albums from "Components/Album/Albums";
import StyledBreadcrumbLink from "Components/Common/StyledBreadcrumbLink";

function Board(props) {
	const handleClick = () => {};
	return (
		<div className="bht-album-board">
			<Router>
				<Breadcrumbs aria-label="breadcrumb">
					<StyledBreadcrumbLink
						to="/"
						label="Home"
						icon={<Home fontSize="small" />}
						onClick={handleClick}
					/>
					<StyledBreadcrumbLink
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
