import DataTable from "@/components/home/data-table";
import { Suspense } from "react";

const Home = () => {

    return (
        <main>
            <Suspense fallback={"Loading..."}>
                <DataTable />
            </Suspense>

        </main>
    )
}

export default Home