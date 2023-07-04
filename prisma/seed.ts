import { prisma } from '../lib/prisma';
import { userUpsert, ticketUpsert } from '../lib/upserts';

async function main() {
	await userUpsert;
	console.log(userUpsert);
	await ticketUpsert;
	console.log(ticketUpsert);
}

main()
	.catch((e) => {
		console.error(e.message);
		throw e;
	})
	.finally(async () => await prisma.$disconnect());
