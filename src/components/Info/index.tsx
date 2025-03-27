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
				</Col>
			</Row>
		</Container>
	);
};

export default Info;
