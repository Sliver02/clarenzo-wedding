import { FavoriteRounded } from "@mui/icons-material";
import { Alert, Button, TextField } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { Col, Container, Row } from "../Grid";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import { AlertResponse, GiftTemplateProps } from "@/common/globalInterfaces";

const GiftForm = () => {
	const [names, setNames] = useState("");
	const [email, setEmail] = useState("");
	const [giftValue, setGiftValue] = useState(0);
	const [message, setMessage] = useState("");

	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState<AlertResponse | null>(null);

	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		console.log("submit-form");
		e.preventDefault();

		try {
			setLoading(true);

			const res = await fetch("/api/send-gift", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					names,
					email,
					giftValue,
					message,
				} as GiftTemplateProps),
			});

			if (res.ok) {
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
				<Row>
					<Col xs={12}>
						<h3 className={classNames("text--h-lg")}>
							Aiutaci con la Luna di Miele!
						</h3>
						<p className={classNames("text--p-md")}>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Veritatis dolorem debitis voluptatum autem
							vero sapiente harum dignissimos molestias facere
							eaque.
						</p>
					</Col>
				</Row>
				<Row lgReverse>
					<Col xs={12} lg={6}>
						<h3 className={classNames("text--h-lg")}>Il Viaggio</h3>
						<p className={classNames("text--p-md")}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Facere quibusdam fugiat sunt cumque, veniam
							eligendi!
						</p>
					</Col>

					<Col xs={12} lg={6}>
						<div className={classNames("imageContainer")}>
							<Image
								alt="castello"
								src={"/castello.jpg"}
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
					<Col xs={12}>
						<p className={classNames("text--strong")}>
							Coordinate Bancarie:
						</p>
						<p>
							<strong>Iban:</strong> 123456IT
							<br />
							<strong>Intestatario:</strong> Lorenzo Panzera
							<br />
							<strong>Causale:</strong> regalo matrimonio
						</p>
					</Col>
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
							label="Nome e cognome partecipanti"
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
