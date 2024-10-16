import "./globals.css";

export const metadata = {
  title: "Wedeccy - portfolio of Wanda and Stanisław Wedecki",
  description: "Portfolio of Wanda and Stanisław Wedecki, Polish artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className="text-white"
      >
        {children}
      </body>
    </html>
  );
}
