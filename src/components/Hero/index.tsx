import { BaseProps } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/Grid";
import { Justify } from "@/components/Grid/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "motion/react";
import { CSSProperties, useRef } from "react";
import Image from "next/image";

const Hero = ({ className }: BaseProps) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center center"],
	}); // Track scroll progress (0 to 1)

	// Move the divs in opposite directions based on scroll progress
	const characterY = useTransform(scrollYProgress, [0, 1], [800, 0]);
	const leafY = useTransform(scrollYProgress, [0, 1], [500, -10]);

	const leafLeftX = useTransform(scrollYProgress, [0, 1], [20, -55]);
	const leafleftRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

	const leafRightX = useTransform(scrollYProgress, [0, 1], [-20, 55]);
	const leafRightRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

	const asd: CSSProperties = {
		width: "auto",
		height: "100%",
		left: "50%",
		transform: "translate(-50%,0)",
		position: "absolute",
	};

	return (
		<div className={classNames(className, styles.hero)}>
			<div ref={ref} className={classNames(styles.leafContainer)}>
				<Image
					alt="wedds"
					width={0}
					height={0}
					sizes="100vw"
					style={asd}
					src={"./background.svg"}
				/>

				<motion.div
					className={classNames(styles.leafLeft)}
					style={{ y: leafY, x: leafLeftX, rotateZ: leafleftRotate }}
				>
					<Image
						alt="leaftleft"
						style={asd}
						width={400}
						height={800}
						src={"./leaf_left.svg"}
					/>
				</motion.div>
				<motion.div
					className={classNames(styles.leafRight)}
					style={{
						y: leafY,
						x: leafRightX,
						rotateZ: leafRightRotate,
					}}
				>
					<Image
						alt="leaftright"
						style={asd}
						width={400}
						height={800}
						src={"./leaf_right.svg"}
					/>
				</motion.div>

				<motion.div
					className={classNames(styles.characters)}
					style={{
						y: characterY,
						translateX: "-50%",
					}}
				>
					<Image
						alt="wedds"
						style={asd}
						width={600}
						height={900}
						src={"./wedds.svg"}
					/>
				</motion.div>
			</div>
			<div
				className={classNames(styles.textWrapper, "text--align-center")}
			>
				<Container>
					<Row xsJustify={Justify.center}>
						<Col xs={12} lg={8}>
							<h1 className={classNames("text--h-md")}>
								Invito Matrimonio
							</h1>
							<p
								className={classNames(
									"text--strong",
									"text--p-xl",
									"text--italic"
								)}
							>
								di Clara e Lorenzo
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Hero;
