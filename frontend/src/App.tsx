import React from 'react'
import { ValidateCard } from './components/ValidateCard'
import { Container, Typography } from '@mui/material'

const App: React.FC = () => (
  <Container maxWidth='lg'>
    <Typography variant='h1'>Credit Card Validator</Typography>
    <ValidateCard />
  </Container>
)

export default App
