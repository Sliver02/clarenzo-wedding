// import styles from "./index.module.scss";
import { CelebrationRounded } from "@mui/icons-material";
import {
	Button,
	Checkbox,
	FormControlLabel,
	SelectChangeEvent,
	TextField,
} from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { Col, Container, Row } from "../Grid";
import MultiselectChips from "../MultiselectChips";
import styles from "./styles.module.scss";

export enum ResponseEnum {
	YES = "YES",
	NO = "NO",
}

const ApplicationForm = () => {
	const [isPartecipating, setIsPartecipating] = useState(ResponseEnum.YES);
	const [plusOne, setPlusOne] = useState(ResponseEnum.NO);
	const [sleep, setSleep] = useState(ResponseEnum.NO);
	const [allergies, setAllergies] = useState<string[]>([]);

	const handlePartecipating = (response: ResponseEnum) => {
		setIsPartecipating(response);
	};

	const handlePlusOne = (response: ResponseEnum) => {
		setPlusOne(response);
	};

	const handleSleep = (response: ResponseEnum) => {
		setSleep(response);
	};

	const handleAllergies = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event;

		setAllergies(value as string[]);
	};

	const submitForm = async () => {
		console.log("submit-form");
	};

	return (
		<Container>
			<form className={classNames(styles.applicationForm)}>
				<Row>
					<Col xs={12}>
						<h3 className={classNames("text--h-lg")}>
							Facci sapere se ci sarai!
						</h3>
						<p className={classNames("text--p-md")}>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Veritatis dolorem debitis voluptatum autem
							vero sapiente harum dignissimos molestias facere
							eaque.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<div>
							<p className={classNames("text--strong")}>
								Parteciperai?
							</p>
							<div>
								<FormControlLabel
									control={
										<Checkbox
											onChange={() =>
												handlePartecipating(
													ResponseEnum.YES
												)
											}
											checked={
												isPartecipating ==
												ResponseEnum.YES
											}
										/>
									}
									label="Si"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={() =>
												handlePartecipating(
													ResponseEnum.NO
												)
											}
											checked={
												isPartecipating ==
												ResponseEnum.NO
											}
										/>
									}
									label="No"
								/>
							</div>
						</div>
					</Col>
					<Col xs={12}>
						<TextField fullWidth required label="Nome Cognome" />
					</Col>
				</Row>
				{isPartecipating == ResponseEnum.YES && (
					<>
						<Row>
							<Col xs={12}>
								<p className={classNames("text--strong")}>
									Porterai un accompagnatore?
								</p>
								<div style={{ marginTop: "0.5rem" }}>
									<FormControlLabel
										control={
											<Checkbox
												onChange={() =>
													handlePlusOne(
														ResponseEnum.YES
													)
												}
												checked={
													plusOne == ResponseEnum.YES
												}
											/>
										}
										label="Si"
									/>
									<FormControlLabel
										control={
											<Checkbox
												onChange={() =>
													handlePlusOne(
														ResponseEnum.NO
													)
												}
												checked={
													plusOne == ResponseEnum.NO
												}
											/>
										}
										label="No"
									/>
								</div>
							</Col>
							{plusOne == ResponseEnum.YES && (
								<Col xs={12}>
									<TextField
										label="Nome Cognome accompagnatore"
										required
										fullWidth
									/>
								</Col>
							)}
						</Row>
						<Row>
							<Col xs={12}>
								<div>
									<p className={classNames("text--strong")}>
										Ti fermerai a dormire?
									</p>
									<div>
										<FormControlLabel
											control={
												<Checkbox
													onChange={() =>
														handleSleep(
															ResponseEnum.YES
														)
													}
													checked={
														sleep ==
														ResponseEnum.YES
													}
												/>
											}
											label="Si"
										/>
										<FormControlLabel
											control={
												<Checkbox
													onChange={() =>
														handleSleep(
															ResponseEnum.NO
														)
													}
													checked={
														sleep == ResponseEnum.NO
													}
												/>
											}
											label="No"
										/>
									</div>
								</div>
							</Col>
							{sleep == ResponseEnum.YES && (
								<Col xs={12}>
									<TextField
										fullWidth
										required
										defaultValue={
											plusOne == ResponseEnum.YES ? 2 : 1
										}
										type="number"
										label="Quanti posti letto ti serviranno?"
									/>
								</Col>
							)}
						</Row>
						<Row>
							<Col xs={12}>
								<p className={classNames("text--strong")}>
									Hai intolleranze o allergie?
								</p>
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
									onChange={handleAllergies}
								/>
							</Col>
							{allergies.includes("Altro") && (
								<Col xs={12}>
									<TextField
										label="Quali altre avvertenze alimenatri?"
										required
										fullWidth
									/>
								</Col>
							)}
						</Row>
					</>
				)}
				<Row>
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Mettici al corrente di qualsiasi altra esigenza o
							dubbio!
						</p>
					</Col>
					<Col xs={12}>
						<TextField label="Note" rows={4} multiline fullWidth />
					</Col>
					<Col xs={12}>
						<Button
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							startIcon={<CelebrationRounded />}
							onClick={() => submitForm()}
						>
							Invia!
						</Button>
					</Col>
				</Row>
			</form>
		</Container>
	);
};

export default ApplicationForm;
