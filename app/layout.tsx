import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
	title: 'News Homepage',
	description: 'News Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${inter.className} bg-off-white`}>
			<body>{children}</body>
		</html>
	);
}
