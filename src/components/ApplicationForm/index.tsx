// import styles from "./index.module.scss";
import { CelebrationRounded, Check, Close } from "@mui/icons-material";
import {
	Button,
	SelectChangeEvent,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import classNames from "classnames";
import { MouseEvent, useState } from "react";
import { Col, Container, Row } from "../Grid";
import MultiselectChips from "../MultiselectChips";

export enum ResponseEnum {
	YES = "YES",
	NO = "NO",
}

const ApplicationForm = () => {
	const [isPartecipating, setIsPartecipating] = useState(ResponseEnum.YES);
	const [plusOne, setPlusOne] = useState(ResponseEnum.NO);
	const [allergies, setAllergies] = useState<string[]>([]);

	const submitForm = async () => {
		console.log("submit-form");
	};

	const handlePartecipating = (
		e: MouseEvent<HTMLElement>,
		response: ResponseEnum
	) => {
		setIsPartecipating(response);
	};

	const handlePlusOne = (
		e: MouseEvent<HTMLElement>,
		response: ResponseEnum
	) => {
		setPlusOne(response);
	};

	const handleAllergies = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event;

		setAllergies(value as string[]);
	};

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
				</Col>
				<Col xs={12}>
					<div>
						<ToggleButtonGroup
							value={isPartecipating}
							onChange={handlePartecipating}
							color="primary"
							size="small"
							exclusive
						>
							<ToggleButton value={ResponseEnum.YES}>
								<Check />
								Sì
							</ToggleButton>
							<ToggleButton value={ResponseEnum.NO}>
								<Close />
								No
							</ToggleButton>
						</ToggleButtonGroup>
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
								<ToggleButtonGroup
									value={plusOne}
									onChange={handlePlusOne}
									color="primary"
									size="small"
									exclusive
								>
									<ToggleButton value={ResponseEnum.YES}>
										<Check />
										Sì
									</ToggleButton>
									<ToggleButton value={ResponseEnum.NO}>
										<Close />
										No
									</ToggleButton>
								</ToggleButtonGroup>
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
