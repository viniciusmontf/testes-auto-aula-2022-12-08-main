
class Romanos {
    private arabicos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    private romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    converte(arabico: number):string{
        
        var romanized = '';

        if(arabico > 0) {
            for (var index = 0; index < this.arabicos.length; index++) {
                while (this.arabicos[index] <= arabico) {
                  romanized += this.romanos[index];
                  arabico -= this.arabicos[index];
                }
            }
            return romanized;
        } else {
            throw new Error("arabico desconhecido");
        }


    } 
}

export {Romanos}