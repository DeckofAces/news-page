import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NewContent from './components/NewContent/NewContent';
import Categories from './components/Categories/Categories';

export default function Home() {
	return (
		<body className='px-4 py-6'>
			<Header />
			<div className='mt-8'>
				<Main />
			</div>
			<div className='mt-14'>
				<NewContent />
			</div>
			<div className='my-14'>
				<Categories />
			</div>
		</body>
	);
}
