import {JSX, ReactNode} from "react"

export const exampleNode:ReactNode[] = [
    <div key="1">Hello</div>,
    <div key="2">World</div>,
    "Hello",
    1,
    undefined,
    null
]

export const exampleJsx:JSX.Element[] = [
    <div key="1">Hello</div>,
    <div key="2">World</div>,
    "Hello",
    1,
    undefined,
    null
]