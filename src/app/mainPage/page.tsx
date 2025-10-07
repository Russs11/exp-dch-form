import { Metadata } from "next"
import { DashBoard } from "./DashBoard"




export const metadata: Metadata = {
    title: 'Main Page',
    description: 'main page',
}

export default function MainPage() {
    return (
        <>
            <DashBoard />
        </>
    )
}