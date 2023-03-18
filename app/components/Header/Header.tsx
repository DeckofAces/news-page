import Image from 'next/image';
import Navigation from '../Navigation/Navigation';

export default function Header() {
	return (
		<>
			<header className='flex items-center justify-between'>
				<Image className='w-12' src='/images/logo.svg' alt='News Logo' width={65} height={40} priority />
				<Navigation />
			</header>
		</>
	);
}
