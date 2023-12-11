import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Product } from '../model/Product';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  imageLink: Yup.string().url('Invalid URL format').required('Image link is required'),
  reviews: Yup.number().integer('Please enter a valid number').required('Reviews is required'),
  prevPrice: Yup.number().required('Previous Price is required'),
  newPrice: Yup.number().required('New Price is required'),
});

const initialValues = {
  title: '',
  description: '',
  imageLink: '',
  reviews: '',
  prevPrice: '',
  newPrice: '',
};

const styles = {
  inputStyles: `block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1
   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-foot-red-400 sm:text-sm sm:leading-6`,
  categoryStyles: `h-4 w-4 border-gray-300 text-indigo-600 focus:ring-foot-red-400`
}


const MyForm = ({id}: any) => {
  const [product, setProduct] = useState<Product[] | undefined>()

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/item/${id}`);
        const data = await res.json()
        setProduct(data.res)
      } catch (error) {
        console.error("Failed to get Item.", error);
      }
    }
    fetchItem()
  }, [id])
  
  return (
    <Formik
      initialValues={{
        title: product?.map(item => item.title) || '', // Set a default value if product is undefined
        description: 'test',
        imageLink: product?.map(item => item.img) || '', // Set a default value if product is undefined
        reviews: product?.map(item => item.reviews) || '', // Set a default value if product is undefined
        prevPrice: product?.map(item => item.prevPrice) || '', // Set a default value if product is undefined
        newPrice: product?.map(item => item.newPrice) || '', // Set a default value if product is undefined
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, handleBlur, values }) => (
        <Form className='m-10 pb-10'>
          {
            product && product.map((item:Product, index: number) => {
              return (
                <span key={item.id}>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Editing </h2>
                      <hr />
                      <p className="mt-3 text-sm leading-6 text-gray-600">General</p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* title div  */}
                        <div className="sm:col-span-4">
                          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                          </label>
                          <div className="mt-2">
                            <Field type="text" name="title" />
                            {/* <input
                              type="text" 
                              name="title" 
                              id="title"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={ item.title }
                              autoComplete="title"
                              className={`${styles.inputStyles}`}
                            /> */}
                            <ErrorMessage name="title" component="div" className="error" />
                          </div>
                          
                        </div>
                        {/* description div  */}
                        <div className="col-span-full">
                          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                          </label>
                          <div className="mt-2">
                            <Field 
                              type="text" 
                              id="description"
                              name="description" 
                              rows={3}
                              className={`${styles.inputStyles}`}
                              // value={''}
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            <ErrorMessage name="description" component="div" className="error" />
                          </div>
                        </div>
                        {/* image url div  */}
                        <div className="col-span-full">
                          <label htmlFor="imageLink" className="block text-sm font-medium leading-6 text-gray-900">
                            Image URL
                          </label>
                          <div className="mt-2">
                            <Field 
                              type="text" 
                              name="imageLink" 
                              id="imageLink"
                              // value={ values.imageLink }
                              // onChange={handleChange}
                              // autoComplete="url"
                              className={`${styles.inputStyles}`}
                            />
                            <ErrorMessage name="imageLink" component="div" className="error" />
                          </div>
                        </div>
                        {/* reviews div  */}
                        <div className="sm:col-span-2 sm:col-start-1">
                          <label htmlFor="reviews" className="block text-sm font-medium leading-6 text-gray-900">
                            Reviews
                          </label>
                          <div className="mt-2">
                            <Field 
                              type="number" 
                              name="reviews" 
                              id="reviews"
                              // value={ values.reviews }
                              // onChange={handleChange}
                              className={`${styles.inputStyles}`}
                            />
                            <ErrorMessage name="reviews" component="div" className="error" />
                          </div>
                        </div>
                        {/* previous price div  */}
                        <div className="sm:col-span-2">
                          <label htmlFor="prevPrice" className="block text-sm font-medium leading-6 text-gray-900">
                            Previous Price
                          </label>
                          <div className="mt-2">
                            <Field 
                              type="number" 
                              name="prevPrice"   
                              id="prevPrice"
                              // value={ values.prevPrice }
                              // onChange={handleChange}
                              className={`${styles.inputStyles}`}
                            />
                            <ErrorMessage name="prevPrice" component="div" className="error" />
                          </div>
                        </div>
                        {/* new price div  */}
                        <div className="sm:col-span-2">
                          <label htmlFor="newPrice" className="block text-sm font-medium leading-6 text-gray-900">
                            New Price
                          </label>
                          <div className="mt-2">
                            <Field 
                              type="number" 
                              name="newPrice" 
                              id="newPrice"
                              autoComplete="newPrice"
                              // value = {values.newPrice}
                              // defaultValue={item.newPrice}
                              // onChange={handleChange}
                              className={`${styles.inputStyles}`}
                            />
                            <ErrorMessage name="newPrice" component="div" className="error" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* category section */}
                    <div className="border-b border-gray-900/10 pb-12">            
                      <div className="mt-10 space-y-10">
                        <fieldset>
                          <legend className="text-sm font-semibold leading-6 text-gray-900">Category</legend>
                          <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                              <input
                                id="slips"
                                name="category"
                                type="radio"
                                className={`${styles.categoryStyles}`}
                              />
                              <label htmlFor="slips" className="block text-sm font-medium leading-6 text-gray-900">
                                Slips
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="sandals"
                                name="category"
                                type="radio"
                                className={`${styles.categoryStyles}`}
                              />
                              <label htmlFor="sandals" className="block text-sm font-medium leading-6 text-gray-900">
                                Sandals
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="corporate"
                                name="category"
                                type="radio"
                                className={`${styles.categoryStyles}`}
                              />
                              <label htmlFor="corporate" className="block text-sm font-medium leading-6 text-gray-900">
                                Corporate
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-foot-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-foot-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foot-red-500"
                      // onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      Save
                    </button>
                  </div>
                </span>
              )
            })
          }
          
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
