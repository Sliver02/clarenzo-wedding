"use client";
import * as React from "react";
import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import styles from "./index.module.scss";
import { Col, Row } from "../Grid";

const submitForm = async (value: string) => {
	// Mimic a server response
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	try {
		const url = new URL(value);

		if (url.hostname.endsWith("example.com")) {
			return { error: "The example domain is not allowed" };
		}
	} catch {
		return { error: "This is not a valid URL" };
	}

	return { success: true };
};

const ApplicationForm = () => {
	const [errors, setErrors] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	const FieldInput = (
		<Field.Root name="url" className={styles.Field}>
			<Field.Label className={styles.Label}>Homepage</Field.Label>
			<Field.Control
				type="url"
				required
				placeholder="https://example.com"
				pattern="https?://.*"
				className={styles.Input}
			/>
			<Field.Error className={styles.Error} />
		</Field.Root>
	);

	return (
		<Form
			className={styles.Form}
			errors={errors}
			onClearErrors={setErrors}
			onSubmit={async (event) => {
				event.preventDefault();
				const formData = new FormData(event.currentTarget);
				const value = formData.get("url") as string;

				setLoading(true);
				const response = await submitForm(value);
				const serverErrors = {
					url: response.error,
				};

				setErrors(serverErrors);
				setLoading(false);
			}}
		>
			<Row>
				<Col xs={12} lg={6}>
					{FieldInput}
				</Col>
				<Col xs={12} lg={6}>
					{FieldInput}
				</Col>
				<Col xs={12}>
					<Field.Root name="url" className={styles.Field}>
						<Field.Label className={styles.Label}>
							Homepage
						</Field.Label>
						<Field.Control
							type="url"
							required
							placeholder="https://example.com"
							pattern="https?://.*"
							className={styles.Input}
							size={120}
						/>
						<Field.Error className={styles.Error} />
					</Field.Root>
				</Col>
				<Col xs={12}>
					<button
						disabled={loading}
						type="submit"
						className={styles.Button}
					>
						Submit
					</button>
				</Col>
			</Row>
		</Form>
	);
};

export default ApplicationForm;
