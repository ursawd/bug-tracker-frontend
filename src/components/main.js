import React, { useEffect, useContext } from "react";
import axios from "axios";
import BugList2 from "./BugList2";
import bugsContext from "../utilities/bugsContext";

const URL = "http://localhost:3333/bugs";
function Main() {
	const { bugs, setBugs, updated } = useContext(bugsContext);

	useEffect(() => {
		axios.get(URL).then(response => {
			setBugs(response.data);
		});
	}, [updated, setBugs]);
	console.log("BUGS", bugs);
	if (!bugs) return null;

	const bugList = bugs.map(bug => {
		if (bug !== null) {
			return (
				<div key={bug._id}>
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
