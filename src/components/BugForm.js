import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./BugForm.css";
import makeBug from "../utilities/makeBug";

function fieldErr(msg) {
	return (
		<p style={{ color: "red", marginBottom: 0 }}>
			<small>{msg}</small>
		</p>
	);
}

const BugForm = () => {
	return (
		<Formik
			initialValues={{
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
			}}
			validationSchema={Yup.object({
				summary: Yup.string()
					.min(5, "Must be 5 char or greater")
					.required("Required"),
				submitter_name: Yup.string().max(25, "Must be 25 char or less"),
				date_reported: Yup.string().required(fieldErr("Date is required")),
				open: Yup.boolean().required(fieldErr("Open is required")),
				platform: Yup.string().required("Required"),
				o_s: Yup.string().required("Required"),
				browser: Yup.string().required("Required"),
				expected_result: Yup.string().required("Required"),
				actual_result: Yup.string().required("Required"),
				steps_to_reproduce: Yup.string().required("Required"),
				severity: Yup.string().required("Required"),
				assigned_to: Yup.string().required("Required"),
				priority: Yup.string().required("Required"),
				actions_taken: Yup.string().required("Required"),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					makeBug(values);
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form>
				<div style={{ display: "flex", flexDirection: "column" }}>
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

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="open">
							Open
						</label>
						<Field name="open" type="text" placeholder="true or false" />
					</div>
					<ErrorMessage name="open" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="platform">
							Platform
						</label>
						<Field name="platform" type="text" />
					</div>
					<ErrorMessage name="platform" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="o_s">
							O/S
						</label>
						<Field name="o_s" type="text" />
					</div>
					<ErrorMessage name="o_s" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="browser">
							Browser
						</label>
						<Field name="browser" type="text" />
					</div>
					<ErrorMessage name="browser" />

					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="severity">
							Severity
						</label>
						<Field name="severity" type="text" />
					</div>
					<ErrorMessage name="severity" />
					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="assigned_to">
							Assigned To
						</label>
						<Field name="assigned_to" type="text" />
					</div>
					<ErrorMessage name="assigned_to" />
					<div style={{ paddingTop: "5px" }}>
						<label className={"label"} htmlFor="priority">
							Priority
						</label>
						<Field name="priority" type="text" />
					</div>
					<ErrorMessage name="priority" />

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
