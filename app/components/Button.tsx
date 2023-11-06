import { useRouter } from 'next/navigation'
import { Button as ButtonType } from "../model/Button"
import { DeleteResponse } from '../model/Response'

export default function Button(props: ButtonType){
  const {value, style, url, deleteClick} = {...props}
  const router = useRouter()  

  const deleteProduct = async () => {
    try {
      if (url) {
        const res = await fetch(url, {
          method: 'DELETE'
        });
        const data: DeleteResponse = await res.json()
        if (data && data.status == "200") {
          alert("Item Deleted")
          if (deleteClick) deleteClick(data.status)
        } 
      }
    } catch (error) {
      throw new Error("Failed to Delete product.");
    }
  }

  function handleClick(){
    if (value == "Back"){
      router.back()
    }

    // Delete Button
    if(value == "Delete") {
      deleteProduct()
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