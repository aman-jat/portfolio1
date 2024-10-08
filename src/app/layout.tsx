import type { Metadata } from 'next';
import '../styles/index.css';
import Header from './components/header/Header';

export const metadata: Metadata = {
  title: 'Aman Jat',
  description: 'Full-stack software developer/engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>
      </head>
      <body className='flex flex-col items-center bg-dark-gray-gradient '>
        <Header />
        {children}
      </body>
    </html>
  );
}
