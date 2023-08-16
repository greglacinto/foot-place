import { NextResponse } from "next/server"
import { AiFillStar } from "react-icons/ai"
import { promises as fs } from 'fs';
import path from 'path'

import { Product } from "@/app/model/Product"

const productFilePath = path.join(process.cwd(), 'app/data');

export const GET = async ( req: Request ) => {
  try {
    console.log("Get all items API")
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(productFilePath + '/products.json', 'utf8');
    const objectData : Product[]  = JSON.parse(jsonData);
    return NextResponse.json({ message: "success", status: "200", objectData }, { status:200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error", status: "500", error }, { status:500 } )
  } 
}

export const POST = async ( req: Request ) => {
  try {
    console.log("Post new item API")
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(productFilePath + '/products.json', 'utf8');
    const objectData : Product[]  = JSON.parse(jsonData);
    console.log(objectData)
    
    // Get the data from the request body
    const { img, title, reviews, prevPrice, newPrice } = await req.json()
    console.log(img, title, reviews, prevPrice, newPrice);

    // Get last element in json file
    const lastElement = objectData.slice(-1)
    const newId = lastElement.length > 0 ?
      (Number(lastElement[0].id)+1).toString(10) :
      "0";

    const newObj: Product = {
      id: newId,
      img: img,
      title: title,
      star: <AiFillStar className="rating-star"/>,
      reviews: reviews,
      prevPrice: prevPrice,
      newPrice: newPrice
    }
    // add new entry to object
    objectData.push(newObj)
    // convert object back to a JSON string
    const updatedData = JSON.stringify(objectData)
    // Write updated array back into products.json
    await fs.writeFile(productFilePath + '/products.json', updatedData, 'utf8')
    //send success response
    return NextResponse.json({ message: "success", status: "200", objectData }, { status:200 })
  } catch (error) {
    NextResponse.json({ message: "Error", status: "500", error }, { status:500 })
  }
}