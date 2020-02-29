import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

describe('<App />', () => {
  it('should display the text input', async () => {
    const { getByPlaceholderText } = render(<App />)

    expect(getByPlaceholderText('Search...')).toBeInTheDocument()
  })
})
