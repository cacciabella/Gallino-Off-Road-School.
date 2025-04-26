import { render, screen } from '@testing-library/react';
import Home from './Pages/index'; // non serve l'estensione .js

test('renders page content', () => {
  render(<Home />);
  const textElement = screen.getByText(/testo che esiste sulla tua pagina/i); 
  expect(textElement).toBeInTheDocument();
});
