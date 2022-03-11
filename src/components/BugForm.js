import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./BugForm.css";
import makeBug from "../utilities/makeBug";
import bugsContext from "../utilities/bugsContext";

function fieldErr(msg) {
	return (
		<span style={{ color: "red", marginBottom: 0, paddingLeft: "150px" }}>
			<small>{msg}</small>
		</span>
	);
}
const startingValues = {
	summary: "",
	submitter_name: "",
	date_reported: "",
	open: "",
	platform: "",
	o_s: "",
	browser: "",
	expected_result: "",
	actual_result: "",
	steps_to_reproduce: "",
	severity: "",
	assigned_to: "",
	priority: "",
	actions_taken: "",
};
const BugForm = () => {
	const { bugs, setBugs, updated, setUpdated } = useContext(bugsContext);
	return (
		<Formik
			initialValues={startingValues}
			validationSchema={Yup.object({
				summary: Yup.string()
					.min(5, "Must be 5 char or greater")
					.required(fieldErr("Required")),
				submitter_name: Yup.string()
					.max(25, "Must be 25 char or less")
					.required(fieldErr("Required")),
				date_reported: Yup.date().max(Date()).required(fieldErr("Required")),
				open: Yup.boolean().required(fieldErr("Required")),
				platform: Yup.string().required(fieldErr("Required")),
				o_s: Yup.string().required(fieldErr("Required")),
				browser: Yup.string().required(fieldErr("Required")),
				expected_result: Yup.string().required(fieldErr("Required")),
				actual_result: Yup.string().required(fieldErr("Required")),
				steps_to_reproduce: Yup.string().required(fieldErr("Required")),
				severity: Yup.string().required(fieldErr("Required")),
				assigned_to: Yup.string().required(fieldErr("Required")),
				priority: Yup.string().required(fieldErr("Required")),
				actions_taken: Yup.string().required(fieldErr("Required")),
			})}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					makeBug(values);
					setUpdated(!updated);
					setSubmitting(false);
					resetForm({ values: startingValues });
				}, 400);
			}}
		>
			<Form>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginLeft: "20px",
					}}
				>
					<div style={{ display: "flex" }}>
						<label className={"label"} htmlFor="summary">
							Summary
						</label>
						<Field
							name="summary"
							as="textarea"
							rows="2"
							style={{ width: "50%" }}
						/>
					</div>
					<ErrorMessage name="summary" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="submitter_name">
							Submitter
						</label>
						<Field name="submitter_name" type="text" />
					</div>
					<ErrorMessage name="submitter_name" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="date_reported">
							Date
						</label>
						<Field name="date_reported" type="text" placeholder="mm/dd/yyyy" />
					</div>
					<ErrorMessage name="date_reported" />

					{/* <div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="open">
							Open
						</label>
						<Field name="open" type="text" placeholder="true or false" />
					</div>
					<ErrorMessage name="open" /> */}

					{/*---------------------- */}
					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="open">
							Open
						</label>
						<Field name="open" as="select">
							<option value="">-Select one-</option>
							<option value={true}>True</option>
							<option value={false}>False</option>
						</Field>
					</div>
					<ErrorMessage name="open" />
					{/*---------------------- */}

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="platform">
							Platform
						</label>
						<Field name="platform" as="select">
							<option value="">-Select one-</option>
							<option value="Windows">Windows</option>
							<option value="Apple">Apple</option>
							<option value="Linix">Linix</option>
						</Field>
					</div>
					<ErrorMessage name="platform" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="browser">
							Browser
						</label>
						<Field name="browser" as="select">
							<option value="">-Select one-</option>
							<option value="Chrome">Chrome</option>
							<option value="Edge">Edge</option>
							<option value="Safari">Safari</option>
							<option value="Other">Other</option>
						</Field>
					</div>
					<ErrorMessage name="browser" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="severity">
							Severity
						</label>
						<Field name="severity" as="select">
							<option value="">-Select one-</option>
							<option value="Low">Low</option>
							<option value="Minor">Minor</option>
							<option value="Major">Major</option>
							<option value="Critical">Critical</option>
							<option value="Blocker">Blocker</option>
						</Field>
					</div>
					<ErrorMessage name="severity" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="priority">
							Priority
						</label>
						<Field name="priority" as="select">
							<option value="">-Select one-</option>
							<option value="Low">Low</option>
							<option value="Medium">Medium</option>
							<option value="High">High</option>
						</Field>
					</div>
					<ErrorMessage name="priority" />
					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="o_s">
							O/S
						</label>
						<Field name="o_s" type="text" />
					</div>
					<ErrorMessage name="o_s" />
					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="assigned_to">
							Assigned To
						</label>
						<Field name="assigned_to" type="text" />
					</div>
					<ErrorMessage name="assigned_to" />

					<div style={{ display: "flex", paddingTop: "5px" }}>
						<label className={"label"} htmlFor="expected_result">
							Expected Result
						</label>
						<Field
							name="expected_result"
							type="text"
							as="textarea"
							rows="2"
							style={{ width: "50%" }}
						/>
					</div>
					<ErrorMessage name="expected_result" />

					<div style={{ display: "flex", paddingTop: "5px" }}>
						<label className={"label"} htmlFor="actual_result">
							Actual Result
						</label>
						<Field
							name="actual_result"
							type="text"
							as="textarea"
							rows="2"
							style={{ width: "50%" }}
						/>
					</div>
					<ErrorMessage name="actual_result" />

					<div style={{ display: "flex", paddingTop: "5px" }}>
						<label className={"label"} htmlFor="steps_to_reproduce">
							Steps to Reproduce
						</label>
						<Field
							name="steps_to_reproduce"
							type="text"
							as="textarea"
							rows="2"
							style={{ width: "50%" }}
						/>
					</div>
					<ErrorMessage name="steps_to_reproduce" />

					<div style={{ display: "flex", paddingTop: "5px" }}>
						<label className={"label"} htmlFor="actions_taken">
							Actions Taken
						</label>
						<Field
							name="actions_taken"
							as="textarea"
							rows="2"
							style={{ width: "50%" }}
						/>
					</div>
					<ErrorMessage name="actions_taken" />

					{/* -------------------------------------------------------------------*/}
					<div>
						<button type="submit">Submit</button>
					</div>
				</div>
			</Form>
		</Formik>
	);
};
export default BugForm;
