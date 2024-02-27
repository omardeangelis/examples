
// Non fare questo
(window as any).foo

// Usa questo
// declaration merging
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html

// Con type non funzionarebbe

type GA = {
    track: (event: string) => void
    enable: boolean
    dajeRomaDaje: string
}

// E' relativo solo al tuo file
declare const window: {
    foo: () => string
    bar: () => number
}

declare global {
//   interface Window {
//     foo: () => string
//   }

//   interface Window {
//     bar: () => number
//   }

  type GoogleAnalytics = GA
}

// Ora puoi usare window.foo e window.bar senza errori
window.foo()
window.bar()

const ga = {
    track: (event) => {
        console.log(event)
    },
    enable: false,
    dajeRomaDaje: 'daje'
} satisfies GoogleAnalytics

ga.track('test')

export {}