import { GoogleDriveLink } from "@/common/globalInterfaces";
import { Button } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "../Grid";

const Gallery = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h3 className={classNames("text--h-lg")}>
						Galleria fotografica
					</h3>
				</Col>
			</Row>
			<div
				style={{
					marginTop: "5rem",
				}}
			/>
			<Row>
				<Col xs={12} lg={7}>
					<div className={classNames("imageContainer")}>
						<Image
							alt="castello"
							src={"/castello.jpg"}
							width={1200}
							height={800}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
					</div>
				</Col>
				<Col xs={12} lg={5}>
					<h3 className={classNames("text--h-lg")}>Foto ospiti</h3>
					<p className={classNames("text--p-md")}>
						Google drive dove potete caricare e vedere le foto di
						tutti gli ospiti!
					</p>
					<Link href={GoogleDriveLink} target="_blank">
						<Button
							variant="contained"
							style={{ marginTop: "1rem" }}
						>
							Apri
						</Button>
					</Link>
				</Col>
			</Row>
			<div
				style={{
					marginTop: "5rem",
				}}
			/>
			<Row lgReverse>
				<Col xs={12} lg={7}>
					<div className={classNames("imageContainer")}>
						<Image
							alt="castello"
							src={"/castello.jpg"}
							width={1200}
							height={800}
							layout="responsive"
							style={{
								minHeight: "100%",
							}}
						/>
					</div>
				</Col>
				<Col xs={12} lg={5}>
					<h3 className={classNames("text--h-lg")}>Foto ufficiali</h3>
					<p className={classNames("text--p-md")}>
						Foto del fotografo ufficiale, potrete accederci qualche
						giorno dopo la cerimonia!
					</p>
					{/* <Link href={GoogleDriveLink} target="_blank"> */}
					<Button
						disabled
						variant="contained"
						style={{ marginTop: "1rem" }}
					>
						Apri
					</Button>
					{/* </Link> */}
				</Col>
			</Row>
		</Container>
	);
};

export default Gallery;
