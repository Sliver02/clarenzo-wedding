import { ApplicationTemplateProps } from "@/common/globalInterfaces";

const ApplicationTemplate: React.FC<Readonly<ApplicationTemplateProps>> = ({
	name,
	email,
	phone,
	isPartecipating,
	plusOne,
	plusOneName,
	allergies,
	otherAllergies,
	notes,
}) => (
	<div>
		<h1>RSVP ricevuto da {name}</h1>
		<p>
			<strong>Name:</strong> {name}
			<br />
			<strong>Email:</strong> {email}
			{phone && (
				<>
					<br />
					<strong>Telefono:</strong> {phone}
				</>
			)}
		</p>

		<p>
			<strong>Partecipa:</strong> {isPartecipating}
		</p>
		<p>
			<strong>Ha un Accompagnatore:</strong> {plusOne}
			{plusOne == "YES" && (
				<>
					<br />
					<strong>Nome Accompagnatore:</strong> {plusOneName}
				</>
			)}
		</p>

		<p>
			<strong>Allergie:</strong> {allergies?.join(", ") || "Nessuna"}
			{otherAllergies && (
				<>
					<br />
					<strong>Altre Allergie:</strong> {otherAllergies}
				</>
			)}
		</p>
		{notes && (
			<p>
				<strong>Note:</strong> {notes}
			</p>
		)}
	</div>
);

export default ApplicationTemplate;
