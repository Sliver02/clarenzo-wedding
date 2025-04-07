import { ApplicationTemplateProps } from "@/common/globalInterfaces";
import ApplicationTemplate from "@/components/ApplicationTemplate";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export const POST = async (req: Request) => {
	try {
		const body: ApplicationTemplateProps = await req.json();

		const {
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
		} = body;

		const { data, error } = await resend.emails.send({
			from: "RSVP <onboarding@resend.dev>",
			to: ["japo02@hotmail.it"], // replace with yours
			subject: `Risposta invito di ${name}`,
			react: ApplicationTemplate({
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
			}) as ReactNode,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
};
