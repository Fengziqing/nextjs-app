import { Body, Container, Html, Link, Preview, Text, Tailwind } from '@react-email/components'
import React, { CSSProperties } from 'react'

//package.json 里设置了 npm run preview-email
//npm run preview-email 这行command会产生一个email sending 工具网站
const WelcomTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>
                Welcome!
            </Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='font-bold text-3xl'>Hello {name}</Text>
                        <Link href='https://ziqingfeng.vercel.app'>https://ziqingfeng.vercel.app</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
//如何给文件style
//1使用传统css模式创建一个CSSProperties对象 赋给组件的<Body style={body}> 
const body: CSSProperties = {
    background: '#fff'
}
const heading: CSSProperties = {
    fontSize: '32px'
}

//2.使用tailwind
//把引入react-email的tailwind
//将需要赋style的组件包裹在tailwind标签里
//像平常一样用classname赋tailwind style

export default WelcomTemplate