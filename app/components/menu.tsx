'use client'
const menuStyle = {
  btn: ``,
  activeBtn: ``
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

  const menuOptions = [
    {
      name: 'Products',
      tag: 'products'
    },
    {
      name: 'New Product',
      tag: 'add-new'
    }
  ]

  function handleClick(value: string) {
    change(value)
    console.log(value)
  }

  return (
    <div className={className}>
      <div className="space-y-4">
        {menuOptions.map(item => {
          return (
            <div key={item.name}>
              <button
                className={`  
                  ${active==`${item.tag}`
                  ? `${menuStyle.activeBtn}`
                  : `${menuStyle.btn}`
                  }
                `}
                onClick={() => handleClick(`${item.tag}`)}
              >
                {item.name}
              </button>
            </div>
          )
        })}
      </div>
  </div>

  // <div className={className}>
  //   <div className="h-screen">
  //     <div className="h-10"></div>
  //     <div className="text-slate-100 space-y-4 ml-2">
  //       <button 
  //         className={`  
  //           ${active=="products"
  //           ? `${menuStyle.activeBtn}`
  //           : `${menuStyle.btn}`
  //           }
  //         `}
  //         onClick={() => handleClick('products')}
  //       >
  //         Products
  //       </button>

  //       <button
  //         className={`  
  //           ${active=="add-new"
  //           ? `${menuStyle.activeBtn}`
  //           : `${menuStyle.btn}`
  //           }
  //         `}
  //         onClick={() => handleClick('add-new')}
  //       >
  //         Add New
  //       </button>
  //     </div>
  //   </div>
  // </div>
  );
}