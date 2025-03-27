"use client";

import ApplicationForm from "@/components/Form";
import { Col, Container, Row } from "@/components/Grid";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import classNames from "classnames";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";

export default function Home() {
	const theme = createTheme({
		palette: {
			mode: "light",
		},
	});

	console.log(styles, styles);

	return (
		<>
			<ThemeProvider theme={theme}>
				<div className={classNames(styles.letterBody)}>
					<Hero
						title="Siete cordialmente invitati al Matrimonio"
						subtitle="di Clara e Lorenzo"
					/>
					<section className={classNames(styles.section)}>
						<Container>
							<Row>
								<Col>
									<ApplicationForm />
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</ThemeProvider>
		</>
	);
}
