import './styles/globals.css';

export const metadata = {
  title: 'Task Management App',
  description: 'Manage your tasks efficiently.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Task Manager</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
