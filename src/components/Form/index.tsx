import * as React from "react";
// import styles from "./index.module.scss";
import { Col, Row } from "../Grid";
import {
	Autocomplete,
	Button,
	FormControl,
	FormLabel,
	Switch,
	TextField,
} from "@mui/material";
import MultiselectChips from "../MultiselectChips";

const submitForm = async () => {
	console.log("submit-form");
};

const ApplicationForm = () => {
	return (
		<Row>
			<Col xs={12} md={2}>
				<FormControl component="fieldset">
					<FormLabel component="switch">Parteciperai?</FormLabel>
					<Switch />
				</FormControl>
			</Col>
			<Col xs={12} md={10}>
				<Autocomplete
					fullWidth
					options={[]}
					renderInput={(params) => (
						<TextField {...params} label="Nome ospite" />
					)}
				/>
			</Col>
			<Col xs={12}>
				<MultiselectChips
					label="Avvertenze alimentari"
					options={[
						"Vegetariano",
						"Celiaco",
						"Intolleranza lattosio",
						"Crostacei",
						"Frutta secca",
						"Altro",
					]}
				/>
			</Col>
			<Col xs={12}>
				<TextField label="Firma ospiti" rows={8} multiline fullWidth />
			</Col>
			<Col xs={12}>
				<Button
					type="submit"
					onClick={() => submitForm()}
					variant="contained"
					size="large"
					// startIcon={<Home />}
				>
					Submit
				</Button>
			</Col>
		</Row>
	);
};

export default ApplicationForm;
