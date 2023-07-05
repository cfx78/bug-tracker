import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export const User = async () => {
	const session = await getServerSession(options);

	return (
		<div className='text-center'>
			<h2 className='text-9xl font-thin'>Logged in as</h2>
			<h3 className='text-9xl '>{session?.user?.email}</h3>
		</div>
	);
};
