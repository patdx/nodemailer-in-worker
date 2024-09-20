import nodemailer from 'nodemailer';
import { Readable } from 'node:stream';

const transporter = nodemailer.createTransport({
	streamTransport: true,
	newline: 'windows',
});

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		const from = url.searchParams.get('from');
		const to = url.searchParams.get('to');
		const subject = url.searchParams.get('subject');
		const text = url.searchParams.get('text');
		const html = url.searchParams.get('html');

		const mail = await transporter.sendMail({
			from: from ?? undefined,
			to: to ?? undefined,
			subject: subject ?? undefined,
			text: text ?? undefined,
			html: html ?? undefined,
		});

		const readableWebStream = Readable.toWeb(mail.message as Readable);

		return new Response(readableWebStream as any, {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
} satisfies ExportedHandler<Env>;
