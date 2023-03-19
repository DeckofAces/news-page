import Image from 'next/image';

function Button({ text }: { text: string }) {
	return <button className='h-12 w-52 bg-soft-red font-bold tracking-[0.2em] text-off-white hover:bg-very-dark-blue'>{text.toUpperCase()}</button>;
}

export default function Main() {
	return (
		<section>
			<Image className='md:hidden' src='/images/image-web-3-mobile.jpg' alt='' width={400} height={100} />
			<Image className='hidden md:block' src='/images/image-web-3-desktop.jpg' alt='' width={1000} height={100} />
			<div className='md:flex md:gap-14 lg:gap-6'>
				<h1 className='mt-7 text-5xl font-extrabold text-very-dark-blue'>The Bright Future of Web 3.0?</h1>
				<div className='md:w-2/3'>
					<p className='my-6 text-dark-greyish-blue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling it&apos;s promise?</p>
					<Button text='Read More' />
				</div>
			</div>
		</section>
	);
}
