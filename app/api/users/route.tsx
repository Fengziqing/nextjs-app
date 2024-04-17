import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//api文件夹名称和admin文件夹名称一样是特殊的可以被识别的文件名。
//名称为route才可以被识别为 请求。
//request:NextRequest 参数：为了避免next使用cache存储返回的data，想要使用cache的情况，请不要使用这个参数。
export function GET(request:NextRequest){
    return NextResponse.json([
        {id:1,name:'haru'},
        {if:2,name:'ziqing'}
    ]);
}

//POST functiion need validation!!!
export async function POST(request:NextRequest){
    const body = await request.json();
    //validation
    //zod:
    //Parse method throws exception(错误警告) to us
    //SafeParse methos returns an object
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
    //status 201 indicated object created
    return NextResponse.json({id:1,name:body.name},{status:201});
}