import RootMiddleware from "@/middleware/root";

export default function Me(){
    return (
        <RootMiddleware>
            <h1>Test</h1>
        </RootMiddleware>
    )
}