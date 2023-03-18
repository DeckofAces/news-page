'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const nav_list = [
	{ text: 'Home', href: '/' },
	{ text: 'New', href: '/' },
	{ text: 'Popular', href: '/' },
	{ text: 'Trending', href: '/' },
	{ text: 'Categories', href: '/' },
];

function NavItem({ href, text }: { href: string; text: string }) {
	return (
		<li>
			<Link href={href}>{text}</Link>
		</li>
	);
}

function MobileNav() {
	const [sideNav, setSideNav] = useState(false);

	return (
		<div className='md:hidden'>
			<div onClick={() => setSideNav(true)} className='cursor-pointer'>
				<Image src='./images/icon-menu.svg' alt='' width={45} height={20} />
			</div>
			{sideNav ? (
				<div className='fixed top-0 left-0 grid h-screen w-full place-items-center bg-very-dark-blue/50 '>
					<nav className='fixed right-0 h-full w-4/6 bg-off-white p-7'>
						<div onClick={() => setSideNav(false)}>
							<Image className='float-right' src='./images/icon-menu-close.svg' alt='' width={35} height={20} />
						</div>
						<ul className='relative top-[18%] flex flex-col space-y-5 text-xl text-very-dark-blue'>
							{nav_list.map((nav) => (
								<NavItem key={nav.text} text={nav.text} href={nav.href} />
							))}
						</ul>
					</nav>
				</div>
			) : (
				''
			)}
		</div>
	);
}

function DesktopNav() {
	return (
		<div className='hidden md:block'>
			<nav className='text-very-dark-blue'>
				<ul className='flex space-x-10'>
					{nav_list.map((nav) => (
						<NavItem key={nav.text} text={nav.text} href={nav.href} />
					))}
				</ul>
			</nav>
		</div>
	);
}

export default function Navigation() {
	return (
		<>
			<MobileNav />
			<DesktopNav />
		</>
	);
}
