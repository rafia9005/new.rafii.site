export default function SkillsLayout() {
  return (
    <>
      <div className="lg:flex block items-center justify-center mt-[15%]">
        <div className="text-start w-[80%]">
          <div className="flex">
            <h1 className="lg:text-[120px] text-4xl lg:px-0 px-[20px]">
              <b>My</b> Skills
            </h1>
            <img src="arrow-style.svg" alt="" className="rotate-[90deg] lg:w-[100px] w-[50px]"/>
          </div>
          <div className="flex items-center gap-[30px] justify-start lg:px-0 px-[10px] mt-[60px]">
            <img src="nextjs.svg" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="tailwind.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="nest.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="django.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="golang.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="vue.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
          </div>
          <div className="flex items-center gap-[30px] justify-start lg:px-0 px-[10px] mt-[60px]">
            <img src="angular.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="svelte.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="typescript.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="docker.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="laravel.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
            <img src="react.png" alt="" className="lg:w-[100px] w-[40px] rounded-lg"/>
          </div>
        </div>
      </div>
    </>
  );
}
