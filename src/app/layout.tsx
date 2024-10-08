import type { Metadata } from 'next';
import localFont from 'next/font/local';

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

export const metadata: Metadata = {
  title: 'Строительные решения',
  description: 'Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией | Строительные решения',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${involveFont.variable} ${gilroyFont.variable} font-helvetica`}>{children}</body>
    </html>
  );
}
