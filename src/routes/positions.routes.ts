import { Router } from 'express';

import { CreatePositionService } from '../services/positions/CreatePositionService';
import { UpdatePositionService } from '../services/positions/UpdatePositionService';
import { RemovePositionService } from '../services/positions/RemovePositionService';
import { FetchPositionService } from '../services/positions/FetchPositionService';
import { FetchAllPositionService } from '../services/positions/FetchAllPositionService';

const router = Router();


router.get('/', async (req, res) => {

  try {
    const positions = await FetchAllPositionService()

    return res.status(200).json({
      positions
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
    abbr,
    description,
    section // te que ver
  } = req.body
  try {
    const position = await CreatePositionService({
      name,
      abbr,
      description,
      section
    })

    return res.status(201).json({
      ...position
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.get('/:positionId', async (req, res) => {
  const { positionId } = req.params

  try {
    const position = await FetchPositionService({
      positionId
    })

    return res.status(200).json({
      ...position
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.put('/:positionId', async (req, res) => {
  const {
    name,
    abbr,
    description,
    section
  } = req.body
  const { positionId } = req.params

  try {
    const position = await UpdatePositionService({
      name,
      abbr,
      description,
      section,
      positionId
    })

    return res.status(200).json({
      ...position
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.delete('/:positionId', async (req, res) => {
  const { positionId } = req.params

  try {
    const position = await RemovePositionService({
      positionId
    })

    return res.status(200).json({
      ...position
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
