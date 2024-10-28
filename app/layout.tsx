import type { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "@/components/layout/Navbar"

export const metadata: Metadata = {
	title: "BookThisUp"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					<main className="flex flex-col min-h-screen bg-secondary">
						<section className="flex-grow">{children}</section>
					</main>
				</body>
			</html>
		</ClerkProvider>
	)
}
