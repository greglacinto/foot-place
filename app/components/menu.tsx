'use client'
const menuStyle = {
  btn: `hover:bg-foot-red-700 hover:p-0.2 hover:rounded-md hover:font-bold block active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300`,
  activeBtn: `bg-foot-red-700 p-0.5 rounded-md block outline-none ring-4 focus:ring-violet-200`
}

interface Props  {
  className:string
  change: Function
  active: string
}

export default function Menu(props: Props){
  const className = props.className
  const change = props.change 
  const active = props.active 


  function handleClick(value: string) {
    change(value)
    console.log(value)
  }

  return (
  <div className={className}>
    <div className="h-screen">
      <div className="h-10"></div>
      <div className="text-slate-100 space-y-4 ml-2">
        <button 
          className={`  
            ${active=="products"
            ? `${menuStyle.activeBtn}`
            : `${menuStyle.btn}`
            }
          `}
          onClick={() => handleClick('products')}
        >
          Products
        </button>

        <button
          className={`  
            ${active=="add-new"
            ? `${menuStyle.activeBtn}`
            : `${menuStyle.btn}`
            }
          `}
          onClick={() => handleClick('add-new')}
        >
          Add New
        </button>

        
      </div>
    </div>
  </div>
  );
}