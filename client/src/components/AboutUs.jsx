export default function AboutUs() {
  return (
    <>
      <div className="flex flex-row justify-center items-center p-12 sm:max-h-[58rem] ">
        <img
          src="../images/about-us.png"
          alt="About us"
          className="sm:h-[52rem]"
        />
        <div className="sm:relative sm:w-[677px] ">
          <svg
            width="715"
            height="677"
            viewBox="0 0 715 677"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 91.7501L714.5 91.7501" stroke="#242E47" />
            <circle
              cx="12.5"
              cy="92.25"
              r="11.5"
              fill="#242E47"
              stroke="#242E47"
            />
            <line
              x1="12.5"
              y1="503.75"
              x2="714.5"
              y2="503.75"
              stroke="#242E47"
            />
            <path d="M660 676.25V0.75" stroke="#242E47" />
            <circle
              cx="660.5"
              cy="505.25"
              r="11.5"
              fill="#242E47"
              stroke="#242E47"
            />
            <path
              d="M23.5 505.25C23.5 511.601 18.3513 516.75 12 516.75C5.64873 516.75 0.5 511.601 0.5 505.25C0.5 498.899 5.64873 493.75 12 493.75C18.3513 493.75 23.5 498.899 23.5 505.25Z"
              fill="#F2F7FC"
              stroke="#242E47"
            />
            <path
              d="M672 92.25C672 98.6013 666.851 103.75 660.5 103.75C654.149 103.75 649 98.6013 649 92.25C649 85.8987 654.149 80.75 660.5 80.75C666.851 80.75 672 85.8987 672 92.25Z"
              fill="#242E47"
              stroke="#242E47"
            />
          </svg>
          <div className="sm:absolute sm:z-10 sm:top-[10rem] sm:left-[2rem] sm:p-4">
            <h1 className="sm:text-[32px] font-[900]">
              WE ARE HISTORICAL PARTS
            </h1>
            <h2 className="sm:text-[24px] font-[300] ">
              An AI powered platform to connect architects, buyers and sellers
              with reusable building components, specifically interior doors.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
