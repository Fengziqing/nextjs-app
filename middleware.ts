//middleware: !!special file name!!  spell correctly notice!!
//middleware: run code before a request is completed, protecting routes
//middleware：会在所有request之前 先进行middleware文件里的处理

//next-auth 的 middleware function: 
//当request满足config里的matcher url时，会自动redirect到login page
export { default } from "next-auth/middleware";//一行 export next-auth/middleware 的方法

//自定义的 middleware function
// export function middleware(request:NextRequest){
//     //request.url: base url for website: localhost:3000
//     return NextResponse.redirect(new URL('/new-page',request.url))
// }

//如果不想要每个request都进行middleware处理的话 
//在export 从身体config里设置 matcher：只有matcher里的request url才会被middleware捕捉处理
export const config = {
    // *: zero or more parameter -> /user or /user/1 ...
    // +: one or more
    // ?: zero or one
    matcher:['/dashboard/:path*']
}