"use client";

import ApplicationForm from "@/components/Form";
import { Col, Container, Row } from "@/components/Grid";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

export default function Home() {
	const theme = createTheme({
		palette: {
			mode: "light",
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<Container>
					<Row>
						<Col>
							<ApplicationForm />
						</Col>
					</Row>
				</Container>
			</ThemeProvider>
		</>
	);
}
