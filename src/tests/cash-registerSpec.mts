import checkCashRegister from '../cash-register.mjs';

describe('A cash register', ()=>{
    it('returns an object.', ()=>{
        expect(typeof checkCashRegister(19.5, 20, [
            ['PENNY', 1.01],
            ['NICKEL', 2.05],
            ['DIME', 3.1],
            ['QUARTER', 4.25],
            ['ONE', 90],
            ['FIVE', 55],
            ['TEN', 20],
            ['TWENTY', 60],
            ['ONE HUNDRED', 100],
          ])).toBe("object");
    });

    it('returns correct change.', ()=>{
        expect(checkCashRegister(19.5, 20, [
            ['PENNY', 1.01],
            ['NICKEL', 2.05],
            ['DIME', 3.1],
            ['QUARTER', 4.25],
            ['ONE', 90],
            ['FIVE', 55],
            ['TEN', 20],
            ['TWENTY', 60],
            ['ONE HUNDRED', 100],
          ]).status).toBe('OPEN');
    })
});