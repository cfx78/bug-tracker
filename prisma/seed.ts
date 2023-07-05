import { hash } from 'bcrypt';
import { prisma } from '../lib/prisma';

async function main() {
	const password = await hash('test', 12);

	const userUpsert = await prisma.user.upsert({
		where: {
			email: 'test@test.com',
		},
		update: {},
		create: {
			email: 'test@test.com',
			name: 'test',
			password,
		},
	});
	console.log(userUpsert);
	const ticketUpsert = await prisma.ticket.upsert({
		where: { title: 'test' },
		update: {},
		create: {
			createdBy: {
				connect: {
					email: 'test@test.com',
				},
			},
			title: 'test',
			description: 'test',
			category: 'OTHER',
			priority: 'LOW',
			assignee: {
				connect: {
					email: 'test@test.com',
				},
			},
			comments: {
				set: [
					{
						text: 'test',
					},
					{
						text: 'test2',
					},
				],
			},
		},
	});
}

main()
	.catch((e) => {
		console.error(e.message);
		throw e;
	})
	.finally(async () => await prisma.$disconnect());
