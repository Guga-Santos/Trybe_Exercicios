import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('Verifica se existe um input email na tela', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText("Email");

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");

  // Acessar os elementos da tela
  // Interagir com elementos(se necessário)
  // Fazer testes.

})
