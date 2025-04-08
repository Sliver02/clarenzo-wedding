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
						Una giornata di festa
					</h2>
					<p className={classNames("text--p-md")}>
						All’inizio del mese di settembre si celebrerà il nostro
						matrimonio. Sì, ci sposiamo! La nostra gioia più grande
						sarà avere con noi tutti gli amici e gli affetti più
						cari, per festeggiare questo momento con allegria e
						divertimento. La cerimonia (civile) si svolgerà al
						Castello Papadopoli Giol, un luogo che ci ha colpito per
						il suo fascino antico e la natura lussureggiante.
						Successivamente, sarete tutti nostri ospiti al
						banchetto, che si terrà sempre al Castello.
					</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<p className={classNames("text--p-md")}>
						Il filo conduttore della giornata sarà legato a una
						passione da noi condivisa, il mondo fantasy della Terra
						di Mezzo. Perciò, se amate anche voi lasciarvi
						trasportare dalla fantasia, fatevi guidare dalle fogge
						elfiche e dai colori del bosco per abiti e accessori. Se
						non sapete di cosa stiamo parlando, va benissimo lo
						stesso, accogliamo qualsiasi stile e/o colore, dal frac
						ai jeans, dalle camicie a quadri alle tute da snowboard!
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
						La cornice incantata di tutta la giornata sarà il
						Castello Papadopoli Giol, a San Polo di Piave, non
						lontano da Treviso e vicino all’uscita dell’autostrada.
						Il posto ha un suo parcheggio interno. Per chi vedesse
						la strada di ritorno a casa troppo lunga e tortuosa, ci
						sarà la possibilità di prenotare in zona una stanza in
						cui fermarsi per la notte.
					</p>
					<br />
					<p className={classNames("text--p-md")}>
						<strong>
							Villa Castello Papadopoli Giol e Parco Giol
						</strong>
						<br />
						<br />
						<strong>Piazza Papadopoli, 2</strong>
						<br />
						31020 <strong>San Polo di Piave</strong> TV
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
					<p className={classNames("text--p-md", "text--strong")}>
						Domenica 07.09.2025
					</p>
					<p className={classNames("text--p-md")}>
						Appuntamento alle <strong>ore 11:30</strong>
					</p>
				</Col>

				<Col xs={12} lg={6}>
					<div className={classNames("imageContainer")}>
						<Image
							alt="castello"
							src={"/castello.jpg"}
							width={1200}
							height={800}
							layout="responsive"
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
					<h3 className={classNames("text--h-lg")}>
						Le tappe del viaggio
					</h3>

					<div
						style={{
							marginTop: "2rem",
						}}
					/>
					<ul>
						<li>
							<strong>12:00</strong> - “Una festa a lungo attesa”
							nella Contea: <strong>la cerimonia</strong>
						</li>
						<li>
							<strong>13:00</strong> -“Molti incontri” a Gran
							Burrone: <strong>il ricevimento</strong>
						</li>
						<li>
							<strong>16:00</strong> - “Lo stagno proibito”:{" "}
							<strong>svago al Castello</strong>
						</li>
						<li>
							<strong>18:00</strong> - “Monte Fato”:{" "}
							<strong>
								serata danzante finché non arrivano le aquile{" "}
							</strong>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Info;
