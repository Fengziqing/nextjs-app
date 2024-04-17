import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request:NextRequest){
    return NextResponse.json([
        {id:1,name:'milk',prices:2.5},
        {id:2,name:'Bread',prices:3.5}
    ])
}

export async function POST(request:NextRequest){
    //validation
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        NextResponse.json(validation.error.errors,{status:400});
    }
    return NextResponse.json({
        id:1,
        name:body.name,
        price:body.price
    },{status:201});
}

export function PUT(request:NextRequest){
    return
}

export function DELETE(request:NextRequest,{params}:{params:{id:string}}){
    return
}