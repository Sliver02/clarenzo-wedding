import { BaseProps } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/Grid";
import { Justify } from "@/components/Grid/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Hero = ({ className }: BaseProps) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	}); // Track scroll progress (0 to 1)

	// Move the divs in opposite directions based on scroll progress
	const characterY = useTransform(scrollYProgress, [0, 1], [800, 0]);
	const leafY = useTransform(scrollYProgress, [0, 1], [500, -10]);

	const leafleftX = useTransform(scrollYProgress, [0, 1], [20, -55]);
	const leafleftRotate = useTransform(scrollYProgress, [0, 1], [10, -5]);

	const leafRightX = useTransform(scrollYProgress, [0, 1], [-20, 55]);
	const leafRightRotate = useTransform(scrollYProgress, [0, 1], [-10, 5]);

	return (
		<div className={classNames(className, styles.hero)}>
			<div ref={ref} className={classNames(styles.leafContainer)}>
				<motion.div
					className={classNames(styles.leafLeft)}
					style={{ y: leafY, x: leafleftX, rotateZ: leafleftRotate }}
				>
					leaf
				</motion.div>
				<motion.div
					className={classNames(styles.leafRight)}
					style={{
						y: leafY,
						x: leafRightX,
						rotateZ: leafRightRotate,
					}}
				>
					leaf
				</motion.div>

				<motion.div
					className={classNames(styles.characters)}
					style={{
						y: characterY,
						translateX: "-50%",
					}}
				>
					characters
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
