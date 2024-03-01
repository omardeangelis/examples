
// Non fare questo
(window as any).foo()

export type GoogleAnalytics = {
    track(): void
    send(): void
}

declare global {
    // interface Window {
    //     foo(): string
    // }

    // interface Window {
    //     bar(): string
    // }

    type GA = GoogleAnalytics
}

declare const window: {
    foo(): string
    bar(): string
}

window.foo()
window.bar()

const test:GA = {
    track() {
        console.log('track')
    },
    send(){
        console.log('send')
    }
}



export {}