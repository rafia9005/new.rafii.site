import Link from "next/link"
import RootMiddleware from "@/middleware/root"

export default function AboutPage() {
    return (
        <RootMiddleware>
            <h1>halaman about</h1>
            <Link href="/">Go Home</Link>
        </RootMiddleware>
    )
}