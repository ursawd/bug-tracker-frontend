import React, { useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import bugsContext from "../utilities/bugsContext";
import "./BugForm.css";
import BugForm from "./BugForm";
import ModalAddBug from "../utilities/ModalAddBug";
import { Button } from "../utilities/ModalAddBug";

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
	function bugEdit() {
		console.log("XXXbug editXXX");
	}
	return (
		<div style={{ display: "flex", marginTop: "20px" }}>
			{/* Icons for edit and delete */}
			{/* <FontAwesomeIcon
				style={{ marginRight: "10px" }}
				icon={faPencil}
				size={"1x"}
				color={"red"}
			/> */}
			<ModalAddBug />
			<FontAwesomeIcon
				style={{ marginRight: "10px" }}
				icon={faTrash}
				size={"1x"}
				color={"red"}
				onClick={bugDelete}
			/>
			<div style={{ flexDirection: "column" }}>
				<header>{bug.summary}</header>
				<div style={{ display: "flex" }}>
					<p>
						<span>{bug.info.open ? "Open" : "Closed"}</span>
					</p>
					<p style={{ marginLeft: "15px" }}>
						<span>{bug.info.date_reported}</span>
					</p>
					<p style={{ marginLeft: "15px" }}>
						Submitter: <span>{bug.info.submitter_name}</span>
					</p>
				</div>

				<div style={{ display: "flex" }}>
					<p>
						Platform: <span>{bug.where.platform}</span>
					</p>
					<p style={{ marginLeft: "15px" }}>
						O/S: <span>{bug.where.o_s}</span>
					</p>
					<p style={{ marginLeft: "15px" }}>
						Browser: <span>{bug.where.browser}</span>
					</p>
				</div>

				<div style={{ display: "flex" }}>
					<p>
						Severity: <span>{bug.action.severity}</span>
					</p>
					<p style={{ marginLeft: "15px" }}>
						Priority: <span>{bug.action.priority}</span>
					</p>
				</div>

				<p>
					Asigned To: <span>{bug.action.assigned_to}</span>
				</p>

				<p>
					Expected Result: <span>{bug.problem.expected_result}</span>
				</p>

				<p>
					Actual Results: <span>{bug.problem.actual_result}</span>
				</p>

				<p>
					Steps to Reproduce: <span>{bug.problem.steps_to_reproduce}</span>
				</p>

				<p>
					Actions Taken: <span>{bug.action.actions_taken}</span>
				</p>
			</div>
		</div>
	);
};
export default BugList2;
