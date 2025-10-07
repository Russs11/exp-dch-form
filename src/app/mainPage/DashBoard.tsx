'use client'

import { Button } from "@heroui/react";
import DropdownComponent from "../components/UI/DropdownComponent";
import TabMenu from "../components/UI/TabMenu";


export function DashBoard() {
    return (
        <>
            <div className="grid grid-cols-1 gap-5 px-0 py-10 grid-rows-[1fr 2fr] md:p-10">
                <div className="grid grid-cols-4 grid-rows-1 gap-x-10 justify-self-end items-center ">
                    <DropdownComponent />
                    <DropdownComponent />
                    <DropdownComponent />
                    <Button className="max-w-40 bg-[#CCE2FC] text-sm text-blue-500 font-bold">
                        Добавить запись
                    </Button>
                </div>
                <div className='grid grid-cols-1 h-40 '>
                    <TabMenu />
                </div>
            </div>
        </>
    );
}