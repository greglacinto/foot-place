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
      name: 'Corporate'
    },
    {
      name: 'Slips'
    }, 
    {
      name: 'Sandals'
    }, 
    {
      name: 'Boots'
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
                  ${active==`${item.name}`
                  ? `${menuStyle.activeBtn}`
                  : `${menuStyle.btn}`
                  }
                `}
                onClick={() => handleClick(`${item.name}`)}
              >
                {item.name}
              </button>
            </div>
          )
        })}

        
      </div>
  </div>
  );
}