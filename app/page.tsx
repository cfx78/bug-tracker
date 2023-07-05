import { User } from '@/lib/user';

export default async function Home() {
	return (
		<main className='bg-slate-900 text-slate-100'>
			<div className='flex flex-col items-center justify-center min-h-screen py-2 text-center'>
				<h1 className='text-9xl '>Hello World</h1>

				<User />
			</div>
		</main>
	);
}
