import { Col, Container, Row } from "@/components/Grid";
import classNames from "classnames";

const Info = () => {
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<h2 className={classNames("text--h-md")}>
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
					<h3 className={classNames("text--h-md")}>Dove?</h3>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere quibusdam fugiat sunt cumque, veniam eligendi!
					</p>
				</Col>

				<Col xs={12} lg={6}>
					<div
						style={{
							background: "gray",
							width: "100%",
							height: "300px",
						}}
					>
						mappa google
					</div>
				</Col>
			</Row>

			<div
				style={{
					marginTop: "5rem",
				}}
			/>
			<Row lgReverse>
				<Col xs={12} lg={6}>
					<h3 className={classNames("text--h-md")}>Quando?</h3>
					<p className={classNames("text--p-md")}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere quibusdam fugiat sunt cumque, veniam eligendi!
					</p>
				</Col>

				<Col xs={12} lg={6}>
					<div
						style={{
							background: "gray",
							width: "100%",
							height: "300px",
						}}
					>
						foto location in autunno
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
					<h3 className={classNames("text--h-md")}>Programma</h3>
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
