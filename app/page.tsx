import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NewContent from './components/NewContent/NewContent';
import Categories from './components/Categories/Categories';

export default function Home() {
	return (
		<body className='px-4 py-6 md:py-20 md:px-36'>
			<Header />
			<div className='mt-8 md:mt-14 md:flex md:gap-10'>
				<div className='md:w-4/5'>
					<Main />
				</div>
				<div className='mt-14 md:my-0'>
					<NewContent />
				</div>
			</div>
			<div className='my-14'>
				<Categories />
			</div>
		</body>
	);
}
