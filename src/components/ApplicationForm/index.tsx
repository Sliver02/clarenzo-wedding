// import styles from "./index.module.scss";
import { Col, Container, Row } from "../Grid";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import MultiselectChips from "../MultiselectChips";
import { CelebrationRounded } from "@mui/icons-material";
import classNames from "classnames";
import { useState } from "react";

export enum Partecipation {
	YES = "Si",
	NO = "No",
}

const ApplicationForm = () => {
	const submitForm = async () => {
		console.log("submit-form");
	};

	const [partecipation, setPartecipation] = useState();

	return (
		<Container>
			<Row>
				<Col xs={12}>
					<h3 className={classNames("text--h-md")}>
						Facci sapere se ci sarai!
					</h3>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Veritatis dolorem debitis voluptatum autem vero
						sapiente harum dignissimos molestias facere eaque.
					</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<p className={classNames("text--strong")}>Parteciperai?</p>
					<div>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Si"
						/>
						<FormControlLabel control={<Checkbox />} label="No" />
					</div>
				</Col>
				<Col xs={12}>
					<TextField fullWidth required label="Nome Cognome" />
				</Col>
				<Col xs={12}>
					<p className={classNames("text--strong")}>
						Porterai un accompagnatore?
					</p>
					<div>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Si"
						/>
						<FormControlLabel control={<Checkbox />} label="No" />
					</div>
				</Col>
				<Col xs={12}>
					<TextField
						label="Nome Cognome accompagnatore"
						required
						fullWidth
					/>
				</Col>
				<Col xs={12}>
					<MultiselectChips
						label="Avvertenze alimentari"
						options={[
							"Vegano",
							"Vegetariano",
							"Intolleranza lattosio",
							"Allergia glutine",
							"Allergia crostacei",
							"Allergia frutta secca",
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
					<TextField label="Note" rows={3} multiline fullWidth />
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
