import '@fontsource/inter';
import './globals.css';

export const metadata = {
  title: 'Coreweaver Labs',
  description: 'Pioneering innovative solutions for a decentralized future',
};

// Define the type for the props, specifying that children is of type React.ReactNode
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}