import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const BugList = ({ bug }) => {
	const formik = useFormik({
		initialValues: {
			summary: "",
			submitter: "",
		},

		validationSchema: Yup.object({
			summary: Yup.string()
				.min(5, "Must be 5 char or greater")
				.required("Required"),
			submitter: Yup.string().max(25, "Must be 25 char or less"),
		}),

		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
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
			<label htmlFor="summary">Summary</label>
			<input
				summary="summary"
				name="summary"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.summary}
			/>
			{formik.touched.summary && formik.errors.summary ? (
				<div>{formik.errors.summary}</div>
			) : null}
			<label htmlFor="submitter">Submitter</label>
			<input
				submitter="submitter"
				name="submitter"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.submitter}
			/>
			{formik.touched.submitter && formik.errors.submitter ? (
				<div>{formik.errors.submitter}</div>
			) : null}
		</form>
	);
};
export default BugList;
