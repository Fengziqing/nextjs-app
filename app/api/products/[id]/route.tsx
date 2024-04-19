import { NextRequest,NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function PUT(request:NextRequest,{params}:{params:{id:number}}){
    //validation
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:404})
    }
    if(params.id>10){
        return NextResponse.json({error:'products not exist'},{status:400})
    }
    return NextResponse.json({name:body.name,price:body.price},{status:200});
}

export function DELETE(request:NextRequest,{params}:{params:{id:number}}){
    if(params.id>10){
        return NextResponse.json({error:'products not exist'},{status:400});
    }
    return NextResponse.json({},{status:200});
}