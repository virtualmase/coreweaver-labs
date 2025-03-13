import '@fontsource/inter';
import './globals.css';

export const metadata = {
  title: 'Coreweaver Labs',
  description: 'Pioneering innovative solutions for a decentralized future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}