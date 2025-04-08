import { GiftTemplateProps } from "@/common/globalInterfaces";

const GiftTemplate: React.FC<Readonly<GiftTemplateProps>> = ({
	names,
	email,
	giftValue,
	message,
}) => (
	<div>
		<h1>Regalo ricevuto da {names}</h1>
		<p>
			<strong>Nomi:</strong> {names}
			<br />
			<strong>Email:</strong> {email}
		</p>
		<p>
			<strong>Somma regalata:</strong> {giftValue}
		</p>
		{message && (
			<p>
				<strong>Messaggio allegato:</strong> {message}
			</p>
		)}
	</div>
);

export default GiftTemplate;
