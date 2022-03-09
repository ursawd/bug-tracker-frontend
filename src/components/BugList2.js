import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const BugList2 = ({ bug }) => {
	console.log("WHERE", JSON.stringify(bug.where));
	if (bug.where === undefined) {
		bug.where = {};
		bug.where.platform = "";
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
