import { Col, Container, Row } from "@/components/Grid";
import {
	AdvancedMarker,
	APIProvider,
	Map,
	Pin,
} from "@vis.gl/react-google-maps";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

const Info = () => {
	const position: { lat: number; lng: number } = {
		lat: 45.66673,
		lng: 12.2416,
	};

	return (
		<Container>
			<Row>
				<Col xs={12}>
					<h2 className={classNames("text--h-lg")}>
						Siamo lieti di invitarti
					</h2>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Incidunt fugiat natus tempore rem mollitia itaque
						pariatur optio quasi ut, neque blanditiis molestiae
						perferendis saepe officiis eligendi, cumque dolore
						maxime, quidem fugit atque sunt iure. Animi pariatur
						nesciunt consequatur dolores esse.
					</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Incidunt fugiat natus tempore rem mollitia itaque
						pariatur optio quasi ut, neque blanditiis molestiae
						perferendis saepe officiis eligendi, cumque dolore
						maxime, quidem fugit atque sunt iure. Animi pariatur
						nesciunt consequatur dolores esse.
					</p>
				</Col>
			</Row>
			<div
				style={{
					marginTop: "5rem",
				}}
			/>
			<Row>
				<Col xs={12} lg={6}>
					<h3 className={classNames("text--h-lg")}>Dove?</h3>
					<p className={classNames("text--p-md")}>
						Festeggieremo nella incatata cornice del{" "}
						<strong>Castello Papadopoli</strong>, vicino a Treviso.
						Un vero luogo incantato per una giornata magica!
						<br />
						<br />
						<strong>Piazza Papadopoli, 2</strong>
						<br /> 31020 <strong>San Polo di Piave</strong> TV
					</p>
				</Col>

				<Col xs={12} lg={6}>
					<APIProvider
						apiKey={
							process.env
								.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
						}
					>
						<div className={classNames(styles.mapContainer)}>
							<Map
								mapId={process.env.NEXT_PUBLIC_MAP_ID}
								defaultZoom={9}
								defaultCenter={position}
								disableDefaultUI
								fullscreenControl
							>
								<AdvancedMarker
									position={{
										lat: 45.79137936604671,
										lng: 12.39342036929163,
									}}
									onClick={() =>
										window.open(
											process.env
												.NEXT_PUBLIC_GOOGLE_MAPS_CASTLE as string
										)
									}
								>
									<Pin />
								</AdvancedMarker>
							</Map>
						</div>
					</APIProvider>
				</Col>
			</Row>

			<div
				style={{
					marginTop: "5rem",
				}}
			/>
			<Row lgReverse>
				<Col xs={12} lg={6}>
					<h3 className={classNames("text--h-lg")}>Quando?</h3>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere quibusdam fugiat sunt cumque, veniam eligendi!
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
			<div
				style={{
					marginTop: "5rem",
				}}
			/>
			<Row>
				<Col xs={12} lg={8}>
					<h3 className={classNames("text--h-lg")}>Programma</h3>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere quibusdam fugiat sunt cumque, veniam eligendi!
					</p>
					<div
						style={{
							marginTop: "2rem",
						}}
					/>
					<ul>
						<li>
							<strong>attivitá 1, 9:00</strong> - Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
							Recusandae quaerat porro veritatis?
						</li>
						<li>
							<strong>attivitá 2, 9:00</strong> - Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
							Recusandae quaerat porro veritatis?
						</li>
						<li>
							<strong>attivitá 3, 9:00</strong> - Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
							Recusandae quaerat porro veritatis?
						</li>
						<li>
							<strong>attivitá 4, 9:00</strong> - Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
							Recusandae quaerat porro veritatis?
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Info;
