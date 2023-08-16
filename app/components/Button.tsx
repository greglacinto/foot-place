import { useRouter } from 'next/navigation'
import { Button as ButtonType } from "../model/Button"


export default function Button(props: ButtonType){
  const {value, style} = {...props}
  const router = useRouter()
  function handleClick(){
    console.log('Button clicked')
    console.log(value)
    if (value == "Back"){
      router.back()
    }
  }
  return (
    <button 
      className={`flex-shrink-0 bg-foot-red-500 hover:bg-foot-red-900 
        border-foot-red-500 hover:border-foot-red-900 text-sm border-4 text-white py-1 
        px-2 rounded ${style}`}
      type="submit"
      onClick={handleClick}
    >
      { value }
    </button>
  )
}