import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@heroui/react";


export default function TableCard() {

    const rows = [
        {
            key: "1",
            name: "1",
            typeOfCrime: "Кража из а/м",
            status: "1234 от 11.09.2025",
        },
        {
            key: "2",
            name: "ОВД",
            typeOfCrime: "Адрес",
            status: "УД",
        },
        {
            key: "3",
            name: "",
            typeOfCrime: "",
            status: "",
        },

    ];

    const columns = [
        {
            key: "name",
            label: "№ по сводке",
        },
        {
            key: "typeOfCrime",
            label: "Вид преступления",
        },
        {
            key: "status",
            label: "КУСП",
        },
    ];

    return (
        <Table
            aria-label="Example static collection table"
            defaultSelectedKeys={["2", "3"]}
            isStriped={true}
        // removeWrapper
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
            {/* <TableBody>
                <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4" className="">
                    <TableCell className="w-fit">ФИО подозреваемого по сводке,</TableCell>
                    <TableCell>предоставление д/к, б/к,</TableCell>
                    <TableCell>замечания по ФТ</TableCell>
                </TableRow>
            </TableBody> */}
        </Table>
    );
}