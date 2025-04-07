import { ApplicationTemplateProps } from "@/common/globalInterfaces";

const ApplicationTemplate: React.FC<Readonly<ApplicationTemplateProps>> = ({
	name,
	email,
	phone,
	isPartecipating,
	plusOne,
	plusOneName,
	sleep,
	beds,
	allergies,
	otherAllergies,
	notes,
}) => (
	<div>
		<h1>RSVP ricevuto da {name}</h1>
		<p>
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
			<strong>Desiderano dormire qui:</strong> {sleep}
			{sleep == "YES" && (
				<>
					<br />
					<strong>Posti letto richiesti:</strong>
					{beds}
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
