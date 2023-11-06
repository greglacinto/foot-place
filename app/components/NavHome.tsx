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
            ${active=="corp"
            ? `${menuStyle.activeBtn}`
            : `${menuStyle.btn}`
            }
          `}
          onClick={() => handleClick('corp')}
        >
          CORPORATE
        </button>

        <button
          className={`  
            ${active=="slips"
            ? `${menuStyle.activeBtn}`
            : `${menuStyle.btn}`
            }
          `}
          onClick={() => handleClick('slips')}
        >
          SLIPS
        </button>

        <button
          className={`  
            ${active=="sandal"
            ? `${menuStyle.activeBtn}`
            : `${menuStyle.btn}`
            }
          `}
          onClick={() => handleClick('sandal')}
        >
          SANDALS
        </button>

        <button
          className={`  
            ${active=="boot"
            ? `${menuStyle.activeBtn}`
            : `${menuStyle.btn}`
            }
          `}
          onClick={() => handleClick('boot')}
        >
          BOOTS
        </button>

        
      </div>
    </div>
  </div>
  );
}