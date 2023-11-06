import { useForm } from "react-hook-form"

import { NewProduct } from "../model/Product";


type res =  {
  'message': string
  'status': number
  'objectData': []
}


export default function AddProduct(){
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewProduct>();
  

  async function onSubmit(formFields: NewProduct){
    const formData = formFields
    console.log(formData)
    const response = await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    const data: res = await response.json()
    console.log(data.message, data.status)
    if(data.message == "success") {
      alert("Success");
      reset({
        title: '',
        img: '',
        reviews: '',
        prevPrice: '',
        newPrice: ''
      })
    }
  }

  function Error({ message }: { message: string }) {
    return (
        <div className="rounded  border border-red-600 bg-red-50 p-0.5 mb-1 text-red-600">
            {message}
        </div>
    );
  }

  return (
    <div>
      <h1 className="font-extrabold  mb-10">Add Product</h1>
      <form onSubmit={ handleSubmit(onSubmit) } className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="img">
              Image Link
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="grid-first-name" 
              type="text" 
              placeholder="URL" 
              {...register('img', { required: { value: true, message: 'Url Required' } })}
            />
            {errors.img && <Error message={errors.img.message!} />}

          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
              TItle
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-last-name" 
              type="text" 
              placeholder="" 
              {...register('title', { required: { value: true, message: 'Title required'} })}
              />
              {errors.title && <Error message={errors.title.message!} />}
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="reviews">
              Reviews
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
              py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
             id="grid-reviews" 
             type="text" 
             placeholder="0" 
             {...register("reviews")}
             />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="prevPrice">
              Previous Price
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-prevPrice" 
              type="text" 
              placeholder="0" 
              {...register("prevPrice")}
              />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="newPrice">
              New Price
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-newPrice" 
              type="text" 
              placeholder="0" 
              {...register("newPrice", { required: { value: true, message: 'Item Price required' } })}
              />
              {errors.newPrice && <Error message={errors.newPrice.message!} />}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mt-10">
          <div className="w-full px-3">
            {/* <Button 
            {...buttonProps} 
            /> */}
            <input type="submit" 
              className={`flex-shrink-0 bg-foot-red-500 hover:bg-foot-red-900 
              border-foot-red-500 hover:border-foot-red-900 text-sm border-4 text-white py-1 
              px-2 rounded`}
            />
          </div>
        </div>
      </form>
    </div>
  )
}