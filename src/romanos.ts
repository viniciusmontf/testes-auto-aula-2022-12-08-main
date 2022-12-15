
class Romanos {
    private arabicos = [
        1,
        5,
        10,
        50,
        100,
        500,
        1000
    ]
    
    private romanos = [
        'I',
        'V',
        'X',
        'L',
        'C',
        'D',
        'M'
    ]

    converte(arabico: number):string{
        
        const posicao_encontrada = this.arabicos.indexOf(arabico);
        if(posicao_encontrada >= 0){
            return this.romanos[posicao_encontrada];
        } else {
            const posicao_encontrada2 = this.arabicos.indexOf(arabico-1);
            if (posicao_encontrada2 >= 0) {
                // ok
                return this.romanos[posicao_encontrada2]+"I";
            } else {
                const posicao_encontrada3 = this.arabicos.indexOf(arabico-2);
                if (posicao_encontrada3 >= 0) {
                    // ok
                    return this.romanos[posicao_encontrada3]+"II";
                }
            }
        }
        throw new Error("arabico desconhecido");
    } 
}

export {Romanos}