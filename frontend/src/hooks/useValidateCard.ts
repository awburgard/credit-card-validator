import { useState } from 'react'
import axios from 'axios'

export const useValidateCard = () => {
  const [isValid, setIsValid] = useState<null | boolean>(null)
  const [loading, setLoading] = useState(false)

  const validateCard = async (cardNumber: string) => {
    try {
      setLoading(true)
      const { data } = await axios.post('http://localhost:3000/api/validate', {
        cardNumber,
      })
      setIsValid(data.isValid)
    } catch (err) {
      console.error('Validation Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return { isValid, validateCard, loading }
}
