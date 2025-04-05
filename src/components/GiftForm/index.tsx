import { FavoriteRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { Col, Container, Row } from "../Grid";
import styles from "./styles.module.scss";
import { useState } from "react";

const GiftForm = () => {
	const [giftValue, setGiftValue] = useState(0);

	return (
		<Container>
			<form className={classNames(styles.giftForm)}>
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
						<div className={classNames(styles.imageContainer)}>
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
						/>
					</Col>
					<Col xs={12}>
						<TextField
							fullWidth
							required
							type="email"
							label="email"
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
						/>
					</Col>
					<Col xs={12}>
						<Button
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							startIcon={<FavoriteRounded />}
							// onClick={() => submitForm()}
						>
							Invia!
						</Button>
					</Col>
				</Row>
			</form>
		</Container>
	);
};

export default GiftForm;
