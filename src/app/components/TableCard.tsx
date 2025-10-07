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
            name: "Jane Fisher",
            typeOfCrime: "Senior Developer",
            status: "Active",
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
        </Table>
    );
}