
class Romanos {
    private arabicos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    private romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

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