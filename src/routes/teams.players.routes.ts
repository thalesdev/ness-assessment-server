import { Router } from 'express'
import { AddPlayerToTeamService } from '../services/teamsplayers/AddPlayerToTeamService'

const router = Router()

router.post('/', async (req, res) => {
  const {
    teamId,
    playerId,
    salary,
    startAt,
    endAt
  } = req.body
  try {
    const contract = await AddPlayerToTeamService({
      teamId,
      playerId,
      salary,
      startAt,
      endAt
    })
    return res.status(201).json({
      ...contract
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})





export default router;
