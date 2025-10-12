export default function TableCard2() {


    return (
        <div className="grid grid-cols-1">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3">
                <table className="w-full border-collapse bg-white  overflow-hidden text-gray-600 font-light text-[0.8rem]">
                    <thead className="bg-gray-200 rounded-lg">
                        <tr>
                            <th className="px-4 py-2">№ по сводке</th>
                            <th className="px-4 py-2">Вид преступления</th>
                            <th className="px-4 py-2">КУСП</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Кража из а/м</td>
                            <td className="px-4 py-2">1234 от 11.09.2025</td>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">ОВД</th>
                            <th className="px-4 py-2">Адрес</th>
                            <th className="px-4 py-2">УД</th>
                        </tr>
                        <tr className="hover:bg-gray-200">
                            <td className="px-4 py-2">Евпатория</td>
                            <td className="px-4 py-2">ул. Ленина</td>
                            <td className="px-4 py-2">-</td>
                        </tr>
                    </tbody>
                </table>

                <table className="w-full border-collapse bg-white overflow-hidden text-gray-600 font-light text-[0.8rem]">
                    <thead className="bg-gray-200 rounded-lg">
                        <tr>

                            <th className="px-4 py-2">Эксперт</th>
                            <th className="px-4 py-2">Способ совершения</th>
                            <th className="px-4 py-2">Статья</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">Иванов</td>
                            <td className="px-4 py-2">Свободный доступ</td>
                            <td className="px-4 py-2">158/2/в</td>
                        </tr>
                        <tr className="bg-gray-200 ">
                            <th className="px-4 py-2">Время ОМП</th>
                            <th className="px-4 py-2">ФИО потерпевшего</th>
                            <th className="px-4 py-2">Сумма ущерба</th>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">12,00-14,00</td>
                            <td className="px-4 py-2">Петров</td>
                            <td className="px-4 py-2">45000 руб</td>
                        </tr>
                    </tbody>
                </table>
                <table className="w-full border-collapse bg-white  overflow-hidden text-gray-600 font-light text-[0.8rem]">
                    <thead className="bg-gray-200 ">
                        <tr>
                            <th className="px-4 py-2">Изъятия</th>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Предпологаемый вывод, Результаты проверки</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">Руки</td>
                            <td className="px-4 py-2">1 лт</td>
                            <td className="px-4 py-2">2 СУЛ пригодны, ил.</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2"></th>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-full overflow-hidden text-gray-600 font-medium text-[0.8rem]">
                    <p className="flex p-4 h-9 items-center bg-gray-200 font-bold ">ФИО подозреваемого по сводке, предоставление д/к, б/к, замечания по ФТ</p>
                    <p className="flex p-4 h-fit items-center">Симдоров, 00.00.1968</p>
                </div>
            </div>
        </div >

    )
}