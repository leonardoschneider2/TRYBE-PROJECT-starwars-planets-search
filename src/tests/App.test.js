import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import planetsMockedValue from './helpers/dataPlanets';
import userEvent from '@testing-library/user-event';

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
    screen.logTestingPlaygroundURL();
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
    
    screen.logTestingPlaygroundURL();
  });

  test('Testando o início da aplicação', () => {
    render(<App />);
    const comparison = screen.getByTestId('comparison-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparison, 'menor que');
    userEvent.click(button);

    screen.logTestingPlaygroundURL();
  });

  test('Testando o início da aplicação', () => {
    render(<App />);
    const comparison = screen.getByTestId('comparison-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparison, 'maior que');
    userEvent.click(button);

    screen.logTestingPlaygroundURL();
  });
})
