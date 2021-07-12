import { Router } from 'express';

import { CreatePlayerService } from '../services/players/CreatePlayerService';
import { UpdatePlayerService } from '../services/players/UpdatePlayerService';
import { RemovePlayerService } from '../services/players/RemovePlayerService';
import { FetchPlayerService } from '../services/players/FetchPlayerService';
import { FetchAllPlayerService } from '../services/players/FetchAllPlayerService';

const router = Router();


router.get('/', async (req, res) => {

  try {
    const players = await FetchAllPlayerService()

    return res.status(200).json({
      players
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.post('/', async (req, res) => {
  const {
    name,
    positionId
  } = req.body
  try {
    const player = await CreatePlayerService({
      name,
      positionId
    })

    return res.status(201).json({
      ...player
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.get('/:playerId', async (req, res) => {
  const { playerId } = req.params

  try {
    const player = await FetchPlayerService({
      playerId
    })

    return res.status(200).json({
      ...player
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.put('/:playerId', async (req, res) => {
  const {
    name,
    positionId
  } = req.body
  const { playerId } = req.params

  try {
    const player = await UpdatePlayerService({
      name,
      playerId,
      positionId
    })

    return res.status(200).json({
      ...player
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.delete('/:playerId', async (req, res) => {
  const { playerId } = req.params

  try {
    const player = await RemovePlayerService({
      playerId
    })

    return res.status(200).json({
      ...player
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
