import React, { useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import bugContext from "../utilities/bugsContext";
import bugsContext from "../utilities/bugsContext";

const BugList2 = ({ bug }) => {
	// if (bug.where === undefined) {
	// 	bug.where = {};
	// 	bug.where.platform = "";
	// }

	const { bugs, setBugs, updated, setUpdated } = useContext(bugsContext);

	function bugDelete() {
		console.log("DELETING", bug._id);
		const URL = "http://localhost:3333/bugs/" + bug._id;
		console.log(URL);
		axios
			.delete(URL)
			.then(function (response) {
				console.log(response);
				setUpdated(!updated);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	return (
		<div style={{ display: "flex" }}>
			{/* Icons for edit and delete */}
			<FontAwesomeIcon
				style={{ marginRight: "10px" }}
				icon={faPencil}
				size={"1x"}
				color={"red"}
			/>
			<FontAwesomeIcon
				style={{ marginRight: "10px" }}
				icon={faTrash}
				size={"1x"}
				color={"red"}
				onClick={bugDelete}
			/>
			<div style={{ flexDirection: "column" }}>
				<p>Summary: {bug.summary}</p>

				<p>Submitter: {bug.info.submitter_name}</p>

				<p>Reported: {bug.info.date_reported}</p>

				<p>Open?: {bug.info.open ? "Open" : "Closed"}</p>

				<p>Platform: {bug.where.platform}</p>
			</div>
			{/* 
			<p>O/S: {bug.where.o_s}</p>
			<p>Browser: {bug.where.browser}</p>
			<p>Severity: {bug.action.severity}</p>
			<p>Asigned To: {bug.action.assigned_to}</p>
			<p>Priority {bug.action.priority}</p>
			<p>Expected Result {bug.problem.expected_result}</p>
			<p>Actual Results {bug.problem.actual_result}</p>
			<p>Steps to Reproduce {bug.problem.steps_to_reproduce}</p>
			<p>Actions Taken{bug.actions.actions_taken}</p> */}
		</div>
	);
};
export default BugList2;
