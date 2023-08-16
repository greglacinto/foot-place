import Button from "./Button"
import { Button as ButtonType } from "../model/Button"
import { useForm, SubmitHandler } from "react-hook-form"

const buttonProps: ButtonType = {
  value: 'submit',
  style: ''
}

type FormInput = {
  imgUrl: string
  imgTitle: string
  imgReviews: string
  imgPrevPrice: string
  imgNewPrice: string

}

export default function AddProduct(){
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imgUrl">
              Image Link
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="grid-first-name" 
              type="text" 
              placeholder="URL" 
              {...register('imgUrl', { required: { value: true, message: 'Url Required' } })}
            />
            {errors.imgUrl && <Error message={errors.imgUrl.message!} />}

          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imgTitle">
              TItle
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-last-name" 
              type="text" 
              placeholder="" 
              {...register('imgTitle', { required: { value: true, message: 'Title required'} })}
              />
              {errors.imgTitle && <Error message={errors.imgTitle.message!} />}
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imgReviews">
              Reviews
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
              py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
             id="grid-reviews" 
             type="text" 
             placeholder="0" 
             {...register("imgReviews")}
             />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imgPrevPrice">
              Previous Price
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-prevPrice" 
              type="text" 
              placeholder="0" 
              {...register("imgPrevPrice")}
              />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imgNewPrice">
              New Price
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-newPrice" 
              type="text" 
              placeholder="0" 
              {...register("imgNewPrice", { required: { value: true, message: 'Item Price required' } })}
              />
              {errors.imgNewPrice && <Error message={errors.imgNewPrice.message!} />}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mt-10">
          <div className="w-full px-3">
            <Button {...buttonProps} />
          </div>
        </div>
      </form>
    </div>
  )
}