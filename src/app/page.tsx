"use client";

import ApplicationForm from "@/components/ApplicationForm";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import classNames from "classnames";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "motion/react";
import Info from "@/components/Info";
import { useRef } from "react";
import Image from "next/image";
import GiftForm from "@/components/GiftForm";
import Presentations from "@/components/Presentations";

export default function Home() {
	const theme = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#85a371",
				contrastText: "#343d2d",
			},
		},
	});

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	// Move the divs in opposite directions based on scroll progress
	const letterUpY = useTransform(scrollYProgress, [0, 1], [0, -1000]);
	const letterDownY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<div className={classNames(styles.pageContainer)}>
					<div ref={ref} className={classNames(styles.letterRef)} />

					<motion.div
						className={classNames(styles.letterUp)}
						style={{
							y: letterUpY,
							translateX: "-50%",
							translateY: "-70%",
						}}
					>
						<Image
							alt="letterup"
							width={1040}
							height={500}
							src={"./letterup.svg"}
						/>
					</motion.div>

					<motion.div
						className={classNames(styles.letterDown)}
						style={{
							y: letterDownY,
							translateX: "-50%",
							translateY: "50%",
						}}
					>
						<Image
							alt="letterdown"
							width={1040}
							height={600}
							src={"./letterdown.svg"}
						/>
					</motion.div>

					<motion.div
						className={classNames(styles.cover)}
						style={{
							y: letterDownY,
						}}
					/>

					<div className={classNames(styles.pageBody)}>
						<section className={classNames(styles.section)}>
							<Hero />
						</section>
						<section className={classNames(styles.section)}>
							<Info />
						</section>
						<section className={classNames(styles.section)}>
							<ApplicationForm />
						</section>
						<section className={classNames(styles.section)}>
							<Presentations />
						</section>
						<section className={classNames(styles.section)}>
							<GiftForm />
						</section>
						<section className={classNames(styles.section)}>
							FOTO/VIDEO OSPITI
							<br />
							link fotografo ufficiale
							<br />
							carosello <br />
							link aperto per google drive dove caricare
							foto/video
							<br />
							carosello del drive
						</section>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}
