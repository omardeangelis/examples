const user:Record<string, string> = {}
// const user = {} satisfies Record<string, string>

user.name = 'John'
user.age = '30'

// user.age = 30 // non auto complete

// Example 2

type Config = Record<string, string | number>

// Use satisfies to check if the object satisfies the type & narrow down the type
// If you use Variable annotation, you lost the type narrowing
const config ={
    expiresIn: 60,
    secret: 'secret'
} satisfies Config

config.expiresIn

