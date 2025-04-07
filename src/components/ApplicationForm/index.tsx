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
import { FormEvent, useState } from "react";
import { Col, Container, Row } from "../Grid";
import MultiselectChips from "../MultiselectChips";
import styles from "./styles.module.scss";
import { ApplicationTemplateProps } from "@/common/globalInterfaces";

export enum ResponseEnum {
	YES = "YES",
	NO = "NO",
}

const ApplicationForm = () => {
	const [isPartecipating, setIsPartecipating] = useState(ResponseEnum.YES);
	const [plusOne, setPlusOne] = useState(ResponseEnum.NO);
	const [plusOneName, setPlusOneName] = useState("");
	const [sleep, setSleep] = useState(ResponseEnum.NO);
	const [beds, setBeds] = useState(1);
	const [allergies, setAllergies] = useState<string[]>([]);
	const [otherAllergies, setOtherAllergies] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [notes, setNotes] = useState("");
	// const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const handlePartecipating = (response: ResponseEnum) => {
		setIsPartecipating(response);
	};

	const handlePlusOne = (response: ResponseEnum) => {
		setPlusOne(response);
		setBeds(response == ResponseEnum.YES ? 2 : 1);
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

	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		console.log("submit-form");
		e.preventDefault();

		try {
			const res = await fetch("/api/send-application", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					isPartecipating,
					plusOne,
					plusOneName,
					sleep,
					beds,
					allergies,
					otherAllergies,
					notes,
				} as ApplicationTemplateProps),
			});

			if (res.ok) {
				console.log("Email inviata!");
			} else {
				console.error("Errore nell'invio");
			}
		} catch (error) {
			console.error("Errore:", error);
		}
	};

	return (
		<Container>
			<form
				className={classNames(styles.applicationForm)}
				onSubmit={submitForm}
			>
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
						<TextField
							fullWidth
							required
							label="Nome Cognome"
							onChange={(e) => setName(e.target.value)}
						/>
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
										onChange={(e) =>
											setPlusOneName(e.target.value)
										}
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
										value={beds}
										type="number"
										label="Quanti posti letto ti serviranno?"
										onChange={(e) =>
											setBeds(Number(e.target.value))
										}
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
										required
										fullWidth
										label="Quali altre avvertenze alimenatri?"
										onChange={(e) =>
											setOtherAllergies(e.target.value)
										}
									/>
								</Col>
							)}
						</Row>
					</>
				)}
				<Row>
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Come possiamo contattarti?
						</p>
					</Col>
					<Col xs={12} md={6}>
						<TextField
							required
							fullWidth
							type="email"
							label="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Col>
					<Col xs={12} md={6}>
						<TextField
							fullWidth
							label="Telefono"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Mettici al corrente di qualsiasi altra esigenza o
							dubbio!
						</p>
					</Col>
					<Col xs={12}>
						<TextField
							multiline
							fullWidth
							label="Note"
							rows={4}
							onChange={(e) => setNotes(e.target.value)}
						/>
					</Col>
					<Col xs={12}>
						<Button
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							startIcon={<CelebrationRounded />}
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
