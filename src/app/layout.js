import "./globals.css";

export const metadata = {
	title: "Victoria Commercial Bank",
	description: "Your Ultimate Banking solution",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
