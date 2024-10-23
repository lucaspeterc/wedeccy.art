import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import ScrollUpButton from './components/ScrollUpButton';


export const metadata = {
  title: "Wedeccy - portfolio of Wanda and Stanisław Wedecki",
  description: "Portfolio of Wanda and Stanisław Wedecki, Polish artists",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
      className="text-white"
      >
        {children}
        <ScrollUpButton />
      </body>
      <Analytics/>
    </html>
  );
}
