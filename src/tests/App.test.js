import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import planetsMockedValue from './helpers/dataPlanets';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Testando a tabela do starWars: ', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(planetsMockedValue),
    })
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  test('Testando o início da aplicação', () => {
    render(<App />);
    const filter = screen.getByTestId('name-filter');
    const comparison = screen.getByTestId('comparison-filter');
    const value = screen.getByTestId('value-filter');
    const column = screen.getByTestId('column-filter');
    userEvent.type(filter, 'T');
    
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.selectOptions(column, 'diameter');
    userEvent.type(value, '3');
    
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);
    
    userEvent.selectOptions(comparison, 'menor que');
    userEvent.click(button);
    
    userEvent.selectOptions(comparison, 'maior que');
    userEvent.click(button);
  });
  test('Testando o início da aplicação', () => {
    render(<App />);
    const filter = screen.getByTestId('name-filter');
    const comparison = screen.getByTestId('comparison-filter');
    const value = screen.getByTestId('value-filter');
    const column = screen.getByTestId('column-filter');
    userEvent.type(filter, 'T');
    
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.selectOptions(column, 'diameter');
    userEvent.type(value, '3');
    
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);
    
  });

  test('Testando o início da aplicação', () => {
    render(<App />);
    const comparison = screen.getByTestId('comparison-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparison, 'menor que');
    userEvent.click(button);

  });

  test('Testando o início da aplicação', () => {
    render(<App />);
    const comparison = screen.getByTestId('comparison-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparison, 'maior que');
    userEvent.click(button);

  });

  test('Testando o início da aplicação', () => {
    render(<App />);
    const comparison = screen.getByTestId('comparison-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparison, 'menor que');
    userEvent.click(button);

    const rmAll = screen.getByRole('button', { name: /remover todas filtragens/i })
    userEvent.click(rmAll);
  });

  test('Testando o início da aplicação', async () => {
    render(<App />);
    const comparison = screen.getByTestId('comparison-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparison, 'maior que');
    userEvent.click(button);
    const x = screen.getByRole('button', { name: /x/i });

    userEvent.click(x); 
    // screen.findByText('');

  });

  test('Testando o início da aplicação', async () => {
    render(<App />);
    // separando os inputs que vou trabalhar.
    const asc = screen.getByRole('radio', { name: /ascendente/i });
    const desc = screen.getByRole('radio', { name: /descendente/i });
    const slt2 = screen.getAllByRole('combobox')[2];
    const btn = screen.getByRole('button', { name: /ordenar/i });
    // aguardando a renderização da table
    await screen.findAllByTestId('planet-name');

    // CLICKS DO TESTE 1. Ordenação do menor Surface_Water pro maior.
    userEvent.selectOptions(slt2, 'surface_water');
    userEvent.click(asc);
    userEvent.click(btn);
    // TESTANDO O TESTE 1. aguardando a promise antes de testar.
    const xom = await screen.findAllByTestId('planet-name');
    screen.logTestingPlaygroundURL();
    expect(xom[0]).toHaveTextContent('Bespin');

    // CLICKS DO TESTE 2. invertendo a ordenação. Surface_Water do maior pro menor.
    userEvent.click(desc);
    userEvent.click(btn);
    // TESTANDO O TESTE 2. aguardando a promise antes de testar
    const com = await screen.findAllByTestId('planet-name');
    expect(com[0]).toHaveTextContent('Kamino');
    
    // CLICKS DO TESTE 3. testando a linha 70 e 68 do StarWarsProvider. Situações que ambos valores recebem "unknown"
    screen.logTestingPlaygroundURL();
    userEvent.selectOptions(slt2, 'population');
    userEvent.click(btn);
    userEvent.click(asc);
    userEvent.click(btn);
  });
})
