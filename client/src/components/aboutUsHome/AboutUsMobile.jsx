export default function AboutUsMobile() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <svg
          // width="389"
          height="443"
          viewBox="0 0 389 443"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-20"
        >
          <path d="M23 376L23 8.99999" stroke="#242E47" />
          <line
            x1="362.5"
            y1="443"
            x2="362.5"
            y2="-2.18557e-08"
            stroke="#242E47"
          />
          <path d="M389 57.5835L-8.73208e-06 57.5835" stroke="#242E47" />
          <path
            d="M23 293.674C27.1421 293.674 30.5 297.032 30.5 301.174C30.5 305.316 27.1421 308.674 23 308.674C18.8579 308.674 15.5 305.316 15.5 301.174C15.5 297.032 18.8579 293.674 23 293.674Z"
            fill="#F2F7FC"
            stroke="#242E47"
          />
          <circle
            cx="363"
            cy="301.174"
            r="7.5"
            transform="rotate(-90 363 301.174)"
            fill="#242E47"
            stroke="#242E47"
          />
          <circle
            cx="363"
            cy="58.0002"
            r="7.5"
            transform="rotate(-90 363 58.0002)"
            fill="#242E47"
            stroke="#242E47"
          />
          <path
            d="M23 50.0835C27.1421 50.0835 30.5 53.4414 30.5 57.5835C30.5 61.7256 27.1421 65.0835 23 65.0835C18.8579 65.0835 15.5 61.7256 15.5 57.5835C15.5 53.4414 18.8579 50.0835 23 50.0835Z"
            fill="#242E47"
            stroke="#242E47"
          />
        </svg>

        <div className="relative z-10 top-[-21rem] w-4/5 ">
          <h1 className="text-xl font-[900] mb-6 ">WE ARE HISTORICAL PARTS</h1>
          <h2 className="text-lg font-[300]">
            An AI powered platform to connect architects, buyers and sellers
            with reusable building components, specifically interior doors.
          </h2>
        </div>
        <img
          src="../images/about-us-mobile.png"
          alt="About us"
          className="relative z-0 top-[-16rem]"
        />
      </div>
    </>
  );
}
