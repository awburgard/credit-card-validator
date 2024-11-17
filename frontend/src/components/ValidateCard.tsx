import React, { useState } from 'react'
import { useValidateCard } from '../hooks/useValidateCard'
import { TextField, Button, Grid2 as Grid, Typography } from '@mui/material'

const MAX_CARD_LENGTH = 16

export const ValidateCard: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('')
  const { isValid, validateCard, loading } = useValidateCard()

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length <= MAX_CARD_LENGTH) {
      setCardNumber(value)
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    validateCard(cardNumber)
  }

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <TextField
          type='number'
          placeholder='Enter Credit Card Number'
          value={cardNumber}
          onChange={handleCardInputChange}
          disabled={loading}
          fullWidth
          slotProps={{ htmlInput: { maxLength: MAX_CARD_LENGTH } }}
          error={isValid === false}
        />
      </Grid>
      <Grid size={12}>
        <Button disabled={loading || !cardNumber} onClick={handleSubmit}>
          Validate
        </Button>
      </Grid>
      {isValid !== null && (
        <Grid size={12}>
          <Typography color={isValid ? 'success' : 'error'}>
            {isValid ? 'Valid Credit Card' : 'Invalid Credit Card'}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
