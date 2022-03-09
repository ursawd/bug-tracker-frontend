import React, { useState, useEffect } from "react";
import axios from "axios";
import BugForm from "./BugForm";
import BugList from "./BugList";
import BugList2 from "./BugList2";

const URL = "http://localhost:3333/bugs";

function Main() {
	const [bugs, setBugs] = useState(null);

	useEffect(() => {
		axios.get(URL).then(response => {
			setBugs(response.data);
		});
	}, []);
	console.log("BUGS", bugs);
	if (!bugs) return null;

	const bugList = bugs.map(bug => {
		if (bug !== null) {
			return (
				<div>
					{/* <p>{JSON.stringify(bug)}</p> */}
					<BugList2 bug={bug} />
				</div>
			);
		} else {
			return <></>;
		}
	});

	return (
		<div>
			<h2>Bugs List</h2>
			{bugList}
		</div>
	);
}
export default Main;
