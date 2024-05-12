import ReviseFilter from "@/components/revise/filter"
import { Suspense } from "react"

const Revise = () => {
    return (
        <Suspense fallback={"loading..."}>
            <ReviseFilter />
        </Suspense>
    )
}

export default Revise