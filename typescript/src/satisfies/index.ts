const user:Record<string, string> = {}

user.name = 'John'
user.age = '30'


type Config = Record<string, string | number>

const config ={
    expiresIn: 60,
    secret: 'secret'
} satisfies Config

config.expiresIn
