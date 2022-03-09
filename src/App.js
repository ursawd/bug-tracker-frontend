import "./App.css";
import Main from "./components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import Nav from "./components/Nav";
function App() {
	return (
		<div className="App">
			<div>
				<h1>
					<FontAwesomeIcon icon={faBug} size={"1x"} color={"red"} /> Bug Tracker
				</h1>
			</div>
			<Nav />
			<Main />
		</div>
	);
}

export default App;
