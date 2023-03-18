import Image from 'next/image';

function Button({ text }: { text: string }) {
	return <button className='h-12 w-52 bg-soft-red font-bold tracking-[0.2em] text-off-white'>{text.toUpperCase()}</button>;
}

export default function Main() {
	return (
		<div>
			<Image src='/images/image-web-3-mobile.jpg' alt='' width={400} height={100} />
			<h1 className='mt-7 text-5xl font-extrabold text-very-dark-blue'>The Bright Future of Web 3.0?</h1>
			<p className='my-6 text-dark-greyish-blue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling it&apos;s promise?</p>
			<Button text='Read More' />
		</div>
	);
}
