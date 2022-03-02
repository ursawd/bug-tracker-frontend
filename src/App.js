import "./App.css";
import Main from "./components/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div className="App">
			<div>
				<h1>
					<FontAwesomeIcon icon={faBug} size={"1x"} color={"red"} /> Bug Tracker
				</h1>
			</div>
			<Main />
		</div>
	);
}

export default App;
