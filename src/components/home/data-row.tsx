import { Edit, Eye } from "lucide-react";
import QLevel from "../atoms/q-level";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

const DataRow = ({
    data,
    index
}: {
    data: any,
    index: number
}
) => {

    return (
        <TableRow role="button">
            <TableCell>{index + 1}</TableCell>
            <TableCell>{data?.name}</TableCell>
            <TableCell>
                <QLevel level={data?.level} />
            </TableCell>
            {/* <TableCell
                className="flex gap-6 items-center"
            >
                <Button
                    size={"icon"}
                    variant={"outline"}
                >
                    <Eye />
                </Button>

                <Button
                    size={'icon'}
                    variant={'outline'}
                >
                    <Edit />
                </Button>
            </TableCell> */}
        </TableRow>
    )
}


export default DataRow