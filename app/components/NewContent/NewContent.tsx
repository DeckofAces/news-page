function Content({ header, text }: { header: string; text: string }) {
	return (
		<div className='border-b border-greyish-blue py-8 last:border-0 last:pb-0'>
			<h1 className='text-xl font-bold text-off-white'>{header}</h1>
			<p className='text-greyish-blue'>{text}</p>
		</div>
	);
}

export default function NewContent() {
	const articles = [
		{ header: 'Hydrogen VS Electric Cars', text: 'Will hydrogen-fueled cars ever catch up to EVs?' },
		{ header: 'The Downsides of AI Artistry', text: 'What are the possible adverse effects of on-demand AI image generation?' },
		{ header: 'Is VC Funding Drying Up?', text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.' },
	];

	return (
		<section className='bg-very-dark-blue px-6 py-6'>
			<h1 className='text-4xl font-bold text-soft-orange'>New</h1>
			{articles.map((article) => (
				<Content key={article.header} header={article.header} text={article.text} />
			))}
		</section>
	);
}
