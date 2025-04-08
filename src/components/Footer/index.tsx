import classNames from "classnames";
import { Col, Container, Row } from "../Grid";

const Footer = () => {
	return (
		<Container>
			<Row>
				<Col>
					<p>
						<strong>Grazie e a presto!</strong>
						<br />
						Clara & Lorenzo
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className={classNames("text--strong")}>Contatti:</p>
					<p>
						<strong>Email:</strong> panzoniwedding@gmail.com
						<br />
						<strong>Lorenzo:</strong> +39 3388090798
						<br />
						<strong>Clara:</strong> +39 3489896735
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
