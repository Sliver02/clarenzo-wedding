import { AlertResponse } from "@/common/globalInterfaces";
import emailjs from "@emailjs/browser";
import { FavoriteRounded } from "@mui/icons-material";
import { Alert, Button, TextField } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import GiftTemplate from "../GiftTemplate";
import { Col, Container, Row } from "../Grid";
import styles from "./styles.module.scss";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

const GiftForm = () => {
	const [names, setNames] = useState("");
	const [email, setEmail] = useState("");
	const [giftValue, setGiftValue] = useState(0);
	const [message, setMessage] = useState("");

	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState<AlertResponse | null>(null);

	const htmlContent = renderToStaticMarkup(
		<GiftTemplate
			{...{
				names,
				email,
				giftValue,
				message,
			}}
		/>
	);

	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		console.log("submit-form");
		e.preventDefault();

		try {
			setLoading(true);

			const res = await emailjs.send(
				serviceId,
				templateId,
				{
					name: names,
					email,
					title: "Regalo inviato da",
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
			<form className={classNames(styles.giftForm)} onSubmit={submitForm}>
				<Row lgReverse>
					<Col xs={12} lg={6}>
						<h3 className={classNames("text--h-lg")}>
							Luna di Miele
						</h3>
						<p className={classNames("text--p-md")}>
							Se lo desiderate, potete contribuire a realizzare il
							nostro primo viaggio da marito e moglie.
						</p>
						<br />
						<p className={classNames("text--strong")}>
							Coordinate Bancarie:
						</p>
						<p>
							<strong>IBAN:</strong> IT53Z0306961232100000000572
							<br />
							<strong>Intestatario:</strong> Lorenzo Panzera
							<br />
							<strong>Causale:</strong> Regalo matrimonio
						</p>
					</Col>

					<Col xs={12} lg={6}>
						<div className={classNames("imageContainer")}>
							<Image
								alt="castello"
								src={"/presentations/both.jpg"}
								layout="responsive"
								width={1200}
								height={800}
								style={{
									minHeight: "100%",
								}}
							/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12}></Col>
				</Row>
				<Row>
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Il tuo regalo
						</p>
					</Col>
					<Col xs={12}>
						<div className={classNames(styles.giftContainer)}>
							<TextField
								required
								type="number"
								value={giftValue}
								onChange={(e) =>
									setGiftValue(Number(e.target.value))
								}
							/>

							<div className={classNames(styles.buttonContainer)}>
								<Button
									variant="outlined"
									size="large"
									style={{
										minWidth: "0",
										marginRight: "1rem",
									}}
									onClick={() =>
										setGiftValue(
											(currValue) => currValue + 10
										)
									}
								>
									+10
								</Button>
								<Button
									variant="outlined"
									size="large"
									style={{
										minWidth: "0",
										marginRight: "1rem",
									}}
									onClick={() =>
										setGiftValue(
											(currValue) => currValue + 50
										)
									}
								>
									+50
								</Button>
								<Button
									variant="outlined"
									size="large"
									style={{
										minWidth: "0",
										marginRight: "1rem",
									}}
									onClick={() =>
										setGiftValue(
											(currValue) => currValue + 100
										)
									}
								>
									+100
								</Button>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Regalato da
						</p>
					</Col>
					<Col xs={12}>
						<TextField
							fullWidth
							required
							label="Nome e cognome"
							onChange={(e) => setNames(e.target.value)}
						/>
					</Col>
					<Col xs={12}>
						<TextField
							fullWidth
							required
							type="email"
							label="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Lasciaci un messaggio
						</p>
					</Col>
					<Col xs={12}>
						<TextField
							label="Messaggio"
							rows={8}
							multiline
							fullWidth
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Col>
					<Col xs={12}>
						<Button
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							disabled={loading}
							startIcon={<FavoriteRounded />}
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

export default GiftForm;
