import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

//使用{params}:{params:{id:number}} 这样的写法
//用结构体{params}解构结构体{params:{id:number}}
//这里的{params}指代{params:{id:number}}里的params{id:number}
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    //findUnique({where:{参数}}) 找到特定的数据并返回
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    //not found will get null
    if (!user) {
        return NextResponse.json({ error: 'user not exist' }, { status: 400 });
    }
    return NextResponse.json(user, { status: 200 });
}

//PUT and PATCH different:
//PUT for replacing one object
//PATCH for updating one or more properties
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    //updating data need validation
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        //400: bad request
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where:{id: parseInt(params.id)}
    })

    if (!user) {
        //404: not found
        return NextResponse.json({ error: 'users not founded' }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
        where:{id: user.id},
        data:{
            name:body.name,
            email:body.email
        }
    })

    return NextResponse.json(updatedUser, { status: 200 })
}

//DELETE需要两个参数
//1、request:NextRequest
//2、{params}:{params:{id:number}}
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    
    const user = await prisma.user.findUnique({
        where:{
            id:parseInt(params.id)
        }
    });

    //fetch data is exist
    if (!user) {
        return NextResponse.json({ error: 'user not found' }, { status: 400 });
    }

    const deleteUser = await prisma.user.delete({
        where:{
            id:user.id
        }
    })
    return NextResponse.json(deleteUser);
}