import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

//使用{params}:{params:{id:number}} 这样的写法
//用结构体{params}解构结构体{params:{id:number}}
//这里的{params}指代{params:{id:number}}里的params{id:number}
export function GET(
    request:NextRequest,
    {params}:{params:{id:number}}){
    if(params.id>10){
        return NextResponse.json({error:'wrong'},{status:404});
    }
    return NextResponse.json('hello')
}

//PUT and PATCH different:
//PUT for replacing one object
//PATCH for updating one or more properties
export async function PUT(request:NextRequest,{params}:{params:{id:number}}){
    //updating data need validation
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        //400: bad request
        return NextResponse.json(validation.error.errors,{status:400});
    }

    if(params.id>10){
        //404: not found
        return NextResponse.json({error:'users not founded'},{status:404});
    }

    return NextResponse.json({id:params.id,name:'haru'},{status:200})
}

//DELETE需要两个参数
//1、request:NextRequest
//2、{params}:{params:{id:number}}
export function DELETE(
    request:NextRequest,
    {params}:{params:{id:number}}){
    //fetch data is exist
    if(params.id>10){
        return NextResponse.json({error:'user not found'},{status:400});
    }
    return NextResponse.json({});
}