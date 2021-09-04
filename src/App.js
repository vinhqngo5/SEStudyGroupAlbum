import AppBar from "AppBar/AppBar";
import AppFooter from "AppFooter/AppFooter";
import Board from "Board/Board";
import "./App.scss";
function App() {
	return (
		<div className="bht-album">
			<AppBar />
			<Board />
			<AppFooter />
		</div>
	);
}

export default App;
