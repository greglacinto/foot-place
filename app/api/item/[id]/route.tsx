import { NextResponse } from "next/server"
import { promises as fs } from 'fs';
import path from 'path'

import { Product } from "@/app/model/Product"
import { AiFillStar } from "react-icons/ai";

const productFilePath = path.join(process.cwd(), 'app/data');


export const GET = async ( req: Request ) => {
  try {
    console.log("Get one item API")
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(productFilePath + '/products.json', 'utf8');
    const objectData : Product[]  = JSON.parse(jsonData);
    const id = req.url.split('/item/')[1];
    // fetch item data here and create response object with it
    const res: any = objectData.filter(item => item.id === id)
    
    return NextResponse.json({ message: "Success", status: "200", res }, { status:200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", status: "500", error }, { status: 500 })
  }
}

export const PUT = async ( req: Request ) => {
  try {
    console.log("Update item API")
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(productFilePath + '/products.json', 'utf8');
    const objectData : Product[]  = JSON.parse(jsonData);
    console.log(objectData)

    const id = req.url.split('/item/')[1];
    console.log(id)

    // Get the data from the request body
    const { img, title, reviews, prevPrice, newPrice } = await req.json()
    console.log(img, title, reviews, prevPrice, newPrice);

    // fetch item data here and create response object with it
    objectData.map(item => {
      if(item.id == id) {
        item.id = id
        item.img = img,
        item.title = title,
        item.star = <AiFillStar className="rating-star"/>,
        item.reviews = reviews,
        item.prevPrice = prevPrice,
        item.newPrice = newPrice
      }
    })

    // convert object back to a JSON string
    const updatedData = JSON.stringify(objectData)
    // Write updated array back into products.json
    await fs.writeFile(productFilePath + '/products.json', updatedData, 'utf8')
    //send success response
    return NextResponse.json({ message: "Success", status: "200", objectData }, { status:200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", status: "500", error }, { status: 500 })
  }
}

export const DELETE = async ( req: Request ) => {
  try {
    console.log("Delete item API")
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(productFilePath + '/products.json', 'utf8');
    const objectData : Product[]  = JSON.parse(jsonData);
    console.log(objectData)

    // Get ID from request url
    const id = req.url.split('/item/')[1];
    console.log(id)

    // delete item and convert object back to a JSON string
    const updatedData = JSON.stringify(objectData.filter(item => item.id != id))
    console.log(updatedData)
    
    // Write updated array back into products.json
    await fs.writeFile(productFilePath + '/products.json', updatedData, 'utf8')
    //send success response
    return NextResponse.json({ message: "Success", status: "200", updatedData }, { status:200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", status: "500", error }, { status: 500 })
  }
}

