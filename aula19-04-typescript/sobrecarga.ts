function ola(text: string): string;
function ola(text: number): string;
function ola(text: boolean): string;

function ola(text: any): any{
    return `Ola ${text}`
}

/** qtde parametros ou/e tipo de parametros */
console.log(ola('Tudo bem joazinho'))
console.log(ola(100))
console.log(ola(true))