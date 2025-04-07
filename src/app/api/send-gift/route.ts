import { GiftTemplateProps } from "@/common/globalInterfaces";
import GiftTemplate from "@/components/GiftTemplate";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);
const recivinigEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL as string;

export const POST = async (req: Request) => {
	try {
		const body: GiftTemplateProps = await req.json();

		const { gift, names, email, message } = body;

		const { data, error } = await resend.emails.send({
			from: "GIFT <onboarding@resend.dev>",
			to: [recivinigEmail],
			subject: `Regalo da parte di ${name}`,
			react: GiftTemplate({
				gift,
				names,
				email,
				message,
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
