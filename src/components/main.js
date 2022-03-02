import React, { useState, useEffect } from "react";
import axios from "axios";
import BugForm from "./BugForm";

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

	const submitter = bugs.map(bug => {
		if (bug !== null) {
			return (
				<div>
					{/* <h3>{bug.info.submitter_name}</h3> */}
					<p>{JSON.stringify(bug)}</p>
				</div>
			);
		} else {
			return <></>;
		}
	});

	return (
		<div>
			<h2>Bugs List</h2>
			<BugForm></BugForm>
			{submitter}
		</div>
	);
}
export default Main;
