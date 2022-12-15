import { Romanos } from "./romanos";


describe('romanos', () => {

    it('deveria converter 1 para "I"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1); 
        //expectation
        expect (numeroRomanos).toEqual("I");
    });

    it('deveria converter 10 para "X"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(10); 
        //expectation
        expect (numeroRomanos).toEqual("X");
    });

    it('deveria converter 5 para "V"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(5); 
        //expectation
        expect (numeroRomanos).toEqual("V");
    });
    it('deveria converter 500 para "D"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(500); 
        //expectation
        expect (numeroRomanos).toEqual("D");
    });
    it('deveria converter 1000 para "M"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1000); 
        //expectation
        expect (numeroRomanos).toEqual("M");
    });
    it('deveria converter 50 para "L"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(50); 
        //expectation
        expect (numeroRomanos).toEqual("L");
    });
    it('deveria converter 100 para "C"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(100); 
        //expectation
        expect (numeroRomanos).toEqual("C");
    });
    it('deveria converter 2 para "II"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(2); 
        //expectation
        expect (numeroRomanos).toEqual("II");
    });
    it('deveria converter 3 para "III"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(3); 
        //expectation
        expect (numeroRomanos).toEqual("III");
    });
    it('deveria converter 4 para "IV"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(4); 
        //expectation
        expect (numeroRomanos).toEqual("IV");
    });

    it('deveria converter 6 para "VI"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(6); 
        //expectation
        expect (numeroRomanos).toEqual("VI");
    });

    it('Testando erro', () => {
        //setup
        const sut = new Romanos();
        //action        
        //expectation
        expect ( 
            () => { sut.converte(-99) } 
        ).toThrow('');
    });

    it('deveria converter 1001 para "MI"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1001); 
        //expectation
        expect (numeroRomanos).toEqual("MI");
    });

    it('deveria converter 1009 para "MIX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1009); 
        //expectation
        expect (numeroRomanos).toEqual("MIX");
    });

})