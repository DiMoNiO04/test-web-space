import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Footer, Header, ModalProvider } from '@/components/layouts';
import '../styles/index.scss';

const involveFont = localFont({
  src: '../../public/fonts/Involve/Involve-Medium.otf',
  variable: '--font-involve',
  weight: '500',
  style: 'normal',
});

const gilroyFont = localFont({
  src: '../../public/fonts/Gilroy/Gilroy-Bold.woff',
  variable: '--font-gilroy',
  weight: '800',
  style: 'normal',
});

const helveticaFont = localFont({
  src: '../../public/fonts/Helvetica/helvetica_regular.otf',
  variable: '--font-helvetica',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Строительные решения',
  description: 'Создадим ваш идеальный дом в установленные сроки и c 10-летней гарантией | Строительные решения',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${involveFont.variable} ${gilroyFont.variable} ${helveticaFont.variable}`}>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
