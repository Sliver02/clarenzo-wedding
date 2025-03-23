import ApplicationForm from "@/components/Form";
import { Col, Container, Row } from "@/components/Grid";

export default function Home() {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<ApplicationForm />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
