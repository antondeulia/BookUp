import { cn } from "@/lib/utils"
import { Input } from "./ui/input"

const SearchInput = ({ className }: { className?: string }) => {
	return (
		<div className="flex">
			<Input
				placeholder="Search"
				className={cn("pl-10 bg-primary/10 mx-auto", className)}
			/>
		</div>
	)
}

export default SearchInput
