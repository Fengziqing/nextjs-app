import { NextRequest,NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function PUT(request:NextRequest,{params}:{params:{id:string}}){
    //validation
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:404})
    }
    const product = await prisma.product.findUnique({
        where:{
            id: parseInt(params.id)
        }
    })
    if(!product){
        return NextResponse.json({error:'products not exist'},{status:400})
    }
    const newProduct = await prisma.product.update({
        where:{id:product.id},
        data:{
            name:body.name,
            price:body.price
        }
    })
    return NextResponse.json(newProduct,{status:200});
}

export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){
    const product = await prisma.product.findUnique({
        where:{
            id: parseInt(params.id)
        }
    })
    if(!product){
        return NextResponse.json({error:'products not exist'},{status:400});
    }
    await prisma.product.delete({
        where:{
            id: product.id
        }
    })
    return NextResponse.json({});
}