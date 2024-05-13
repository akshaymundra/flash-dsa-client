import { Cross, X } from "lucide-react";
import QLevel from "../atoms/q-level";
import QView from "../q-view/q-view";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";

const DataRow = ({
    data,
    index
}: {
    data: any,
    index: number
}
) => {

    // return (
    //     <TableRow role="button">
    //         <TableCell>{index + 1}</TableCell>
    //         <TableCell>{data?.name}</TableCell>
    //         <TableCell className="capitalize">{data?.topic}</TableCell>
    //         <TableCell>
    //             <QLevel level={data?.level} />
    //         </TableCell>
    //     </TableRow>
    // )

    return (
        <Dialog>
            <DialogTrigger asChild>
                <TableRow className="cursor-pointer">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data?.name}</TableCell>
                    <TableCell className="capitalize">{data?.topic}</TableCell>
                    <TableCell>
                        <QLevel level={data?.level} />
                    </TableCell>
                </TableRow>
            </DialogTrigger>
            <DialogContent
                className="h-[95%] w-[95%] sm:w-[80%] max-w-full overflow-y-auto rounded-lg"
            >
                <QView
                    index={index}
                    data={data}
                />
            </DialogContent>
        </Dialog>
    )
}


export default DataRow