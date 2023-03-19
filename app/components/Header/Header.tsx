import Image from 'next/image';
import Navigation from '../Navigation/Navigation';

export default function Header() {
	return (
		<>
			<header className='flex items-center justify-between'>
				<Image className='w-12 md:w-14' src='/images/logo.svg' alt='News Logo' width={100} height={100} priority />
				<Navigation />
			</header>
		</>
	);
}
