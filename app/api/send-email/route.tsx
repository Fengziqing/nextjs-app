import WelcomTemplate from "@/emails/WelcomTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const  resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(){
    //from: 需要使用私有的DNS,不能使用免费的email地址例如google yahoo...
    //一旦申请下来了私有的DNS,add it to https://resend.com/domains
    await resend.emails.send({
        from:'...',
        to: 'fengziqing970202@gmail.com',
        subject: 'Hello',
        react:<WelcomTemplate name='haruko feng'/>
    })

    return NextResponse.json({})
}