import classNames from "classnames";
import { Col, Container, Row } from "../Grid";

const Footer = () => {
	return (
		<Container>
			<Row>
				<Col>
					<p className={classNames("text--strong")}>
						Grazie e a presto!
					</p>
					<p className={classNames("text--italic")}>
						Clara e lorenzo
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className={classNames("text--strong")}>Contatti:</p>
					<p>
						<strong>Email:</strong> panzoniwedding@gmail.com
						<br />
						<strong>Cell:</strong> +39 3388090798
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
