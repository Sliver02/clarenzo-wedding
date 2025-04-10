// import styles from "./index.module.scss";
import { AlertResponse } from "@/common/globalInterfaces";
import emailjs from "@emailjs/browser";
import { CelebrationRounded } from "@mui/icons-material";
import {
	Alert,
	Button,
	Checkbox,
	FormControlLabel,
	SelectChangeEvent,
	TextField,
} from "@mui/material";
import classNames from "classnames";
import { FormEvent, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ApplicationTemplate from "../ApplicationTemplate";
import { Col, Container, Row } from "../Grid";
import MultiselectChips from "../MultiselectChips";
import styles from "./styles.module.scss";
import Link from "next/link";

export enum ResponseEnum {
	YES = "YES",
	VAN = "YES_VAN",
	NO = "NO",
}

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

const ApplicationForm = () => {
	const [isPartecipating, setIsPartecipating] = useState(ResponseEnum.YES);
	const [plusOne, setPlusOne] = useState(ResponseEnum.NO);
	const [plusOneName, setPlusOneName] = useState("");
	// const [sleep, setSleep] = useState(ResponseEnum.NO);
	// const [beds, setBeds] = useState(1);
	const [allergies, setAllergies] = useState<string[]>([]);
	const [otherAllergies, setOtherAllergies] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [notes, setNotes] = useState("");

	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState<AlertResponse | null>(null);

	const handlePartecipating = (response: ResponseEnum) => {
		setIsPartecipating(response);
	};

	const handlePlusOne = (response: ResponseEnum) => {
		setPlusOne(response);
		// setBeds(response == ResponseEnum.YES ? 2 : 1);
	};

	// const handleSleep = (response: ResponseEnum) => {
	// 	setSleep(response);
	// };

	const handleAllergies = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event;

		setAllergies(value as string[]);
	};

	const htmlContent = renderToStaticMarkup(
		<ApplicationTemplate
			{...{
				name,
				email,
				phone,
				isPartecipating,
				plusOne,
				plusOneName,
				allergies,
				otherAllergies,
				notes,
			}}
		/>
	);

	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		console.log("submit-form");
		e.preventDefault();

		try {
			setLoading(true);
			setAlert(null);

			const res = await emailjs.send(
				serviceId,
				templateId,
				{
					name,
					email,
					title: "RSVP inviato da",
					message_html: htmlContent,
				},
				publicKey
			);

			if (res.text == "OK") {
				console.log("Email inviata!");
				setAlert({
					severity: "success",
					text: "Email inviata!",
				});
			} else {
				console.error("Errore nell'invio");
				setAlert({
					severity: "error",
					text: "Errore nell'invio",
				});
			}
		} catch (error) {
			console.error("Errore:", error);
			setAlert({
				severity: "error",
				text: "Errore: " + error,
			});
		} finally {
			setLoading(false);
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
							Répondez S’il Vous Plaît
						</h3>
						<p className={classNames("text--p-md")}>
							Fateci sapere se parteciperete alla nostra giornata,
							in quanti sarete e tutto ciò che può esserci utile
							per accogliervi al meglio.
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
						{/* <Row>
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
															ResponseEnum.VAN
														)
													}
													checked={
														sleep ==
														ResponseEnum.VAN
													}
												/>
											}
											label="Si, in Van"
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
						</Row> */}
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
				{isPartecipating == ResponseEnum.YES && (
					<Row>
						<Col xs={12}>
							<p className={classNames("text--strong")}>
								Ti fermerai a dormire?
							</p>
							<p className={classNames("text--p-md")}>
								Se hai bisogno di una stanza dove passare la
								notte dopo la festa, la struttura di riferimento
								è questa:
							</p>
							<p className={classNames("text--p-md")}>
								<strong>
									<Link
										href="https://www.villamaternini.com/"
										target="_blank"
									>
										Hotel Villa Maternini
									</Link>
								</strong>
								<br />
								Via Pier Antonio Mutti, 7, 31028 Vazzola TV{" "}
								<br />
								tel. 0438 442096 <br />
							</p>
							<p className={classNames("text--p-sm")}>
								Questa struttura offre diverse opzioni fra cui
								camere singole, matrimoniali, suite da 4/5/6
								persone (con colazione inclusa), quindi avrete
								la possibilità di organizzarvi a seconda delle
								vostre esigenze. Qualora doveste prenotare,
								ricordatevi di avvisare che siete ospiti del
								nostro matrimonio, così verrete accomodati nello
								stesso edificio.
							</p>
						</Col>
					</Row>
				)}
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
							disabled={loading}
							startIcon={<CelebrationRounded />}
						>
							{loading ? "Loading..." : "Invia!"}
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						{alert && (
							<Alert
								variant="outlined"
								severity={alert.severity}
								onClose={() => setAlert(null)}
							>
								{alert.text}
							</Alert>
						)}
					</Col>
				</Row>
			</form>
		</Container>
	);
};

export default ApplicationForm;
