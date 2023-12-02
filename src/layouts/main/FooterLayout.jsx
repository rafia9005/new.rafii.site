export default function FooterLayout(){
    return (
        <>
            <footer className="lg:flex justify-evenly items-center mt-[40px] h-[40vh] block px-[10%]">
                <div>
                <h1 className="lg:text-[80px] text-3xl"><span className="lg:text-[120px] text-[40px]">C</span>ontact</h1>
                <h1 className="text-xl">email : <b>rafia9005@gmail.com</b></h1>
                <h1>instagram : <b>@rafii.site</b></h1>
                </div>
                <ul className="lg:block lg:text-start text-center lg:mt-0 mt-5">
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Home</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">About</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Skills</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Project</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Contact</a></li>
                </ul>
                <ul className="lg:block lg:text-start text-center lg:mt-0 mt-5">
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Github</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">LinkedIn</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Instagram</a></li>
                    <li><a href="" className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">Twitter</a></li>
                </ul>
            </footer>
        </>
    )
}