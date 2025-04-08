import classNames from "classnames";
import { Col, Container, Row } from "../Grid";
import styles from "./styles.module.scss";
import Image from "next/image";

const Presentations = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h3 className={classNames("text--h-xl")}>
						I Protagonisti!
					</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className={classNames("text--h-lg")}>Sposi</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={5}>
					<div className={classNames(styles.portrait)}>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/presentations/clara.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name, "text--h-lg")}>
							Clara
						</h3>
					</div>
				</Col>
				<Col xs={12} md={5}>
					<div
						className={classNames(
							styles.portrait,
							styles["portrait--center"]
						)}
					>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/presentations/lorenzo3.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name)}>Lorenzo</h3>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className={classNames("text--h-lg")}>Testimoni</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4}>
					<div
						className={classNames(
							styles.portrait,
							styles["portrait--medium"],
							styles["portrait--center"]
						)}
					>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/presentations/federica.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name)}>Federica</h3>
					</div>
				</Col>
				<Col xs={12} md={4}>
					<div
						className={classNames(
							styles.portrait,
							styles["portrait--medium"]
						)}
					>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/presentations/jacopo.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name)}>Jacopo</h3>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className={classNames("text--h-md")}>Paggetti</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={3}>
					<div
						className={classNames(
							styles.portrait,
							styles["portrait--small"]
						)}
					>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/presentations/stitch.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name, "text--h-lg")}>
							Stitch
						</h3>
					</div>
				</Col>
				<Col xs={12} md={3}>
					<div
						className={classNames(
							styles.portrait,
							styles["portrait--small"]
						)}
					>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/presentations/butter.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name, "text--h-sm")}>
							Peanut Butter
						</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Presentations;
