import useFetch from "@/hooks/useFetch";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import DataRow from "./data-row";

const DataTable = () => {
    const { res, error } = useFetch({ url: 'data' })
    const data = res?.data;


    if (error) {
        return <div>Error: {error}</div>
    }

    console.log(data)

    return (
        <>
            {data ?
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">#</TableHead>
                            <TableHead className="">Title</TableHead>
                            <TableHead className="w-[100px]">Level</TableHead>
                            {/* <TableHead className="w-[150px]">Action</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((item: any, index: number) => (
                            <DataRow
                                key={index}
                                data={item}
                                index={index}
                            />
                        ))}
                    </TableBody>
                </Table>
                :
                <div>Loading...</div>
            }
        </>
    )

}

export default DataTable;