import { prisma } from './prisma';

export const userUpsert = prisma.user.upsert({
	where: {
		email: 'test@test.com',
	},
	update: {},
	create: {
		email: 'test@test.com',
		name: 'test',
		password: 'test',
	},
});

export const ticketUpsert = prisma.ticket.upsert({
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
