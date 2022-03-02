import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BugForm = () => {
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

			<button type="submit">Submit</button>
		</form>
	);
};
export default BugForm;
