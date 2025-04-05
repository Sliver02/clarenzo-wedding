import classNames from "classnames";
import { Col, Container, Row } from "../Grid";
import styles from "./styles.module.scss";
import Image from "next/image";

const Presentations = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h3 className={classNames("text--h-lg")}>Protagonisti</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={5}>
					<div className={classNames(styles.portrait)}>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/sposa.jpg"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name)}>Sposo</h3>
					</div>
				</Col>
				<Col xs={12} md={5}>
					<div className={classNames(styles.portrait)}>
						<Image
							alt="portait"
							width={300}
							height={300}
							src={"/sposo.webp"}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
						<div className={classNames(styles.gradient)} />
						<h3 className={classNames(styles.name)}>Sposo</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Presentations;
