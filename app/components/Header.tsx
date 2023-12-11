import Link from "next/link";

export default function Header(){
  return (
    <>
      <div className="flex flex-row space-x-4  h-20 text-slate-950">
        {/* Page Div  */}
        <div className="flex basis-1/4 justify-center items-center">
          <Link href="/" className="font-bold text-xl">Foot King</Link>
        </div>
        {/* search Div */}
        <div className="flex basis-1/2 justify-center items-center mt-4">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-lg border border-solid border-neutral-300 bg-slate-100 bg-clip-padding px-3 py-[0.25rem] 
                text-base font-normal leading-[1.6] text-slate-900 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-slate-900 
                focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-slate-200 dark:placeholder:text-slate-900 
                dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1" />

            {/* --Search button-->  */}
            <button
              className="relative z-[2] flex bg-foot-red items-center rounded-r-lg bg-foot-red-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition 
                duration-150 ease-in-out hover:bg-foot-red-400 hover:shadow-lg focus:bg-foot-red-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-foot-red-600
                active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {/* Cart Div */}
        <div className="flex basis-1/6 justify-center items-center">
          <div className="relative py-2 cursor-pointer -mt-4">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-foot-red-500 hover:bg-foot-red-400 p-3 text-xs text-white">1</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}