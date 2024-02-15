import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    template: '%s | PayStat Dashboard',
    default: 'PayStat Dashboard',
  },
  description:
    'Discover PayStat: the ultimate solution for seamless invoice management and insightful revenue trend analysis. Streamline your billing process and unlock powerful analytics for your business growth.',
  metadataBase: new URL('https://nextjs-dashboard-nu-green-70.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
