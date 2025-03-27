"use client";

import ApplicationForm from "@/components/Form";
import { Col, Container, Row } from "@/components/Grid";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import classNames from "classnames";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
	const theme = createTheme({
		palette: {
			mode: "light",
		},
	});

	const { scrollYProgress } = useScroll(); // Track scroll progress (0 to 1)

	// Move the divs in opposite directions based on scroll progress
	const letterUpY = useTransform(scrollYProgress, [0, 1], [0, -1000]);
	const letterDownY = useTransform(scrollYProgress, [0, 1], [0, 800]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<div className={classNames(styles.pageContainer)}>
					<motion.div
						className={classNames(styles.letterUp)}
						style={{
							y: letterUpY,
							translateX: "-50%",
							translateY: "-80%",
						}}
					>
						letter up
					</motion.div>

					<motion.div
						className={classNames(styles.letterDown)}
						style={{
							y: letterDownY,
							translateX: "-50%",
							translateY: "100%",
						}}
					>
						letter down
					</motion.div>

					<motion.div
						className={classNames(styles.cover)}
						style={{
							y: letterDownY,
						}}
					>
						cover
					</motion.div>

					<motion.div className={classNames(styles.pageBody)}>
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
					</motion.div>
				</div>
			</ThemeProvider>
		</>
	);
}
