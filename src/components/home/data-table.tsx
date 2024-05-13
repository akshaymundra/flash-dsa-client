import useFetch from "@/hooks/useFetch";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import DataRow from "./data-row";
import { useEffect, useState } from "react";
import SearchFilter from "./search-filter";

const DataTable = () => {
    const { res, error } = useFetch({ url: 'data' })
    const data = res?.data;
    const [filteredData, setFilteredData] = useState(data);
    const [keywords, setKeywords] = useState("");


    // filter data based on keywords entered in the search input 
    useEffect(() => {
        if (keywords === "") {
            setFilteredData(data)
            return
        } else {
            const filtered = data?.filter((item: any) => {
                return (
                    item?.name.toLowerCase().includes(keywords.toLowerCase()) ||
                    item?.level.toLowerCase().includes(keywords.toLowerCase()) ||
                    item?.topic.toLowerCase().includes(keywords.toLowerCase())
                )
            })
            // console.log("filtered data", filtered)
            setFilteredData(filtered)
        }
    }, [keywords, data])



    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <>

            <div>
                <SearchFilter
                    keywords={keywords}
                    setKeywords={setKeywords}
                />
            </div>

            {filteredData ?
                <Table>
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[80px]">#</TableHead>
                            <TableHead className="w-full">Title</TableHead>
                            <TableHead className="">Topic</TableHead>
                            <TableHead className="">Level</TableHead>
                            {/* <TableHead className="w-[150px]">Action</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData?.map((item: any, index: number) => (
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