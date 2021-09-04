import AppBar from "Components/AppBar/AppBar";
import AppFooter from "Components/AppFooter/AppFooter";
import Board from "Components/Board/Board";
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
