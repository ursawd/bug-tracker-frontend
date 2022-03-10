import React from "react";
import axios from "axios";

const URL = "http://localhost:3333/bugs";

export default function makeBug(values) {
	console.log(values);
	let newBug = {
		summary: values.summary,
		info: {
			submitter_name: values.submitter_name,
			date_reported: values.date_reported,
			open: values.open,
		},
		where: {
			platform: values.platform,
			o_s: values.o_s,
			browser: values.browser,
		},
		problem: {
			expected_result: values.expected_result,
			actual_result: values.actual_result,
			steps_to_reproduce: values.steps_to_reproduce,
		},
		action: {
			severity: values.severity,
			assigned_to: values.assigned_to,
			priority: values.priority,
			actions_taken: values.actions_taken,
		},
	};
	console.log("NEWBUG", newBug);
	axios
		.post(URL, newBug)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
