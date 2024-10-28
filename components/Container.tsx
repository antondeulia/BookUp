import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Container = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				"max-w-[1920px] w-full mx-auto xl:px-20 px-4 min-h-[75px]",
				className
			)}
		>
			{children}
		</div>
	)
}

export default Container
