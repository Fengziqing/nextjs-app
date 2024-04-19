import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

//api文件夹名称和admin文件夹名称一样是特殊的可以被识别的文件名。
//名称为route才可以被识别为 请求。
//request:NextRequest 参数：为了避免next使用cache存储返回的data，想要使用cache的情况，请不要使用这个参数。
export async function GET(request:NextRequest){
    //findAny() 没有参数 返回所有的数据
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
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
    //check if email exist
    const isEmailExist = await prisma.user.findUnique({
        where:{email:body.email}
    })
    if(isEmailExist){
        return NextResponse.json({message:"email already exist"}, {status:400})
    }
    const user = await prisma.user.create({
        data:{
            name:body.name,
            email:body.email
        }
    })
    //status 201 indicated object created
    return NextResponse.json(user,{status:201});
}