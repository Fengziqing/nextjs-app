import z from 'zod'

//具体可以参考 https://zod.dev document
//zod 如何使用schema进行validation
const schema = z.object({
    name:z.string().min(3),
    email:z.string().email()
    // age:z.number()
})

export default schema;