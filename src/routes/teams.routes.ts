import { Router } from 'express';

import playerteamsRouter from './teams.players.routes';

import { CreateTeamService } from '../services/teams/CreateTeamService';
import { UpdateTeamService } from '../services/teams/UpdateTeamService';
import { RemoveTeamService } from '../services/teams/RemoveTeamService';
import { FetchTeamService } from '../services/teams/FetchTeamService';
import { FetchAllTeamService } from '../services/teams/FetchAllTeamService';

const router = Router();


router.use('/players', playerteamsRouter);


router.get('/', async (req, res) => {

  try {
    const teams = await FetchAllTeamService()

    return res.status(200).json({
      teams
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
    foundationAt
  } = req.body
  try {
    const team = await CreateTeamService({
      name,
      abbr,
      description,
      foundationAt
    })

    return res.status(201).json({
      ...team
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.get('/:teamId', async (req, res) => {
  const { teamId } = req.params

  try {
    const team = await FetchTeamService({
      teamId
    })

    return res.status(200).json({
      ...team
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.put('/:teamId', async (req, res) => {
  const {
    name,
    abbr,
    description,
    foundationAt
  } = req.body
  const { teamId } = req.params

  try {
    const team = await UpdateTeamService({
      name,
      abbr,
      description,
      foundationAt,
      teamId
    })

    return res.status(200).json({
      ...team
    })
  } catch (error) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
      errors: error.errors
    })
  }
})

router.delete('/:teamId', async (req, res) => {
  const { teamId } = req.params

  try {
    const team = await RemoveTeamService({
      teamId
    })

    return res.status(200).json({
      ...team
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
