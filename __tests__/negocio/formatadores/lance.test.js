import { formataMaiorLanceDoLeilao } from '../../../src/negocio/formatadores/lance';

describe("negocio/formatadores/lance", () => {

    describe("formataMaiorLanceDoLeilao", () => {
        it("deve retornar o maior lance do leilão", () => {
            const lances = [
                {
                    valor: 20
                },
                {
                    valor: 43
                },
                {
                    valor: 32
                },
            ];
            const valorInicial = 7;
            const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(maiorLance).toBe(43);
        });

        it('deve retornar o valor inicial caso não existam lances', () => {
            const lances = [];
            const valorInicial = 18;
            const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(maiorLance).toBe(18);
        })

    });

})