import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Container from "../Container"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Navbar = () => {
	return (
		<div className="sticky top-0 border border-b-primary/10 bg-secondary">
			<Container className="flex items-center">
				<Link href="/" className="font-bold text-2xl">
					BookThisUP
				</Link>

				<div className="relative ml-[600px] w-[300px]">
					<Input className="border-gray-400" placeholder="Search for..." />
					<Image
						src="/icons/search.svg"
						alt="search"
						width={30}
						height={30}
						className="absolute right-1 top-[3px]"
					/>
				</div>

				<div className="flex items-center gap-6 ml-auto">
					<Image
						src="/icons/moon.svg"
						alt="moon"
						width={50}
						height={50}
						className="fill-black cursor-pointer"
					/>

					<ClerkLoading>Loading...</ClerkLoading>

					<ClerkLoaded>
						<SignedIn>
							<UserButton />
						</SignedIn>

						<SignedOut>
							<div className="flex gap-4 ml-auto ">
								<Link href="/sign-in">
									<Button variant="outline" className="px-8 py-6">
										Sign In
									</Button>
								</Link>
								<Link href="/sign-up">
									<Button className="px-8 py-6">Sign Up</Button>
								</Link>
							</div>
						</SignedOut>
					</ClerkLoaded>
				</div>
			</Container>
		</div>
	)
}

export default Navbar
