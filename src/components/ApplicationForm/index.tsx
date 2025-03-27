import * as React from "react";
// import styles from "./index.module.scss";
import { Col, Container, Row } from "../Grid";
import {
	Autocomplete,
	Button,
	Checkbox,
	FormControlLabel,
	TextField,
} from "@mui/material";
import MultiselectChips from "../MultiselectChips";
import { CelebrationRounded } from "@mui/icons-material";

const submitForm = async () => {
	console.log("submit-form");
};

const ApplicationForm = () => {
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<Autocomplete
						fullWidth
						options={[
							"Jacopo Panzera",
							"Valter Panzera",
							"Paolo DaDeppo",
							"Francesco Fabris",
							"Roberto DaVià",
							"Marco Tabacchi",
						]}
						renderInput={(params) => (
							<TextField
								{...params}
								required
								label="Nome ospite"
							/>
						)}
					/>
				</Col>
				<Col xs={12}>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Parteciperò"
					/>
					<FormControlLabel
						control={<Checkbox />}
						label="Porterò un ospite"
					/>
					<FormControlLabel
						control={<Checkbox />}
						label="Succhierò piselli"
					/>
				</Col>
				<Col xs={12}>
					<TextField label="Chi altro porterai?" fullWidth />
				</Col>
				<Col xs={12}>
					<MultiselectChips
						label="Avvertenze alimentari"
						options={[
							"Vegetariano",
							"Celiaco",
							"Intolleranza lattosio",
							"Allergia Crostacei",
							"Allergia Frutta secca",
							"Altro",
						]}
					/>
				</Col>
				<Col xs={12}>
					<TextField
						label="Quali altre avvertenze alimenatri?"
						fullWidth
					/>
				</Col>
				<Col xs={12}>
					<TextField
						label="Firma ospiti"
						rows={8}
						multiline
						fullWidth
					/>
				</Col>
				<Col xs={12}>
					<Button
						type="submit"
						onClick={() => submitForm()}
						variant="contained"
						size="large"
						startIcon={<CelebrationRounded />}
					>
						Invia!
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default ApplicationForm;
