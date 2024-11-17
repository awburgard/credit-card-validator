import { Router } from 'express'
import { luhnCheck } from '../services/luhnCheck'

const router = Router()

router.post('/validate', (req, res) => {
  const { cardNumber } = req.body

  if (!/^\d+$/.test(cardNumber)) {
    res.status(400).json({ error: 'Invalid input' })
  }

  const isValid = luhnCheck(cardNumber)
  res.json({ isValid })
})

export default router
