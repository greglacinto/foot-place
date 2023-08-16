import Header from "./components/Header"
import Items from "./components/Items"



export default function Home(){
  return (
    <>
      <Header />
      <div className="flex flex-row space-x-4 mt-10">
        <div className="flex basis-1/4 px-1"></div>
        <Items className="flex basis-3/4 px-5"/>
      </div>
    </>
    )
}