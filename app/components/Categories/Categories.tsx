import Image from 'next/image';

function Category({ image, count, title, text }: { image: string; count: number; title: string; text: string }) {
	return (
		<section className='flex items-center gap-6'>
			<Image className='w-1/3 max-w-[6.5rem]' alt='cover' src={image} width={200} height={50} />
			<div className='h-full space-y-2'>
				<h1 className='text-4xl font-bold tracking-wider text-greyish-blue'>0{count}</h1>
				<h2 className='text-lg font-extrabold text-very-dark-blue'>{title}</h2>
				<p className='text-dark-greyish-blue'>{text}</p>
			</div>
		</section>
	);
}

export default function Categories() {
	const categories = [
		{ id: 1, title: 'Reviving Retro PCs', text: 'What happens when old PCs are given modern upgrades?', image: '/images/image-retro-pcs.jpg' },
		{ id: 2, title: 'Top 10 Laptops of 2022', text: 'Our best picks for various needs and budgets.', image: '/images/image-top-laptops.jpg' },
		{ id: 3, title: 'Top Growth of Gaming', text: 'How the pandemic has sparked fresh opportunities.', image: '/images/image-gaming-growth.jpg' },
	];

	return (
		<section>
			<div className='space-y-8'>
				{categories.map((category) => (
					<Category key={category.id} image={category.image} count={category.id} title={category.title} text={category.text} />
				))}
			</div>
		</section>
	);
}
