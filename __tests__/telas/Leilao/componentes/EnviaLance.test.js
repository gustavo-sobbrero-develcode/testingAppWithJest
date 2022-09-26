import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ENVIADO, NAO_ENVIADO } from '../../../../src/negocio/constantes/estadosLance';
import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('telas/Leilao/componentes/EnviaLance', () => {
    it('ao pressionar o botão deve enviar o lance', async () => {
        const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO)))

        const {
            getByPlaceholderText,
            getByAccessibilityHint,
            getByText
        } = render(
            <EnviaLance
                enviaLance={enviaLance}
                cor="blue"
            />
        );

        const input = getByPlaceholderText('R$');
        const button = getByAccessibilityHint('Enviar lance');
        fireEvent.changeText(input, 'OI NE');
        fireEvent.press(button);
        expect(enviaLance).toHaveBeenCalledWith("OI NE");
        await waitFor(() => {
            expect(getByText(ENVIADO)).toBeTruthy();
        });
        expect(() =>
            getByText(NAO_ENVIADO)).toThrow();
    });
});