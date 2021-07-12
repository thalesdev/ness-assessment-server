import { getRepository } from "typeorm"
import { Player } from "../../models/Player"
import { Team } from "../../models/Team"
import { ServiceError } from "../../util/ServiceError"
import { PlayerTeam } from "../../models/PlayerTeam"

interface AddPlayerToTeamServiceDTO {
  teamId: string,
  playerId: string,
  salary: number,
  startAt: Date,
  endAt: Date
}

export async function AddPlayerToTeamService({
  teamId,
  playerId,
  salary,
  startAt,
  endAt
}: AddPlayerToTeamServiceDTO) {
  const playersRepository = getRepository(Player)
  const teamsRepository = getRepository(Team)
  const playersTeamsRepository = getRepository(PlayerTeam)


  const player = await playersRepository.findOne(playerId)
  const team = await teamsRepository.findOne(teamId)
  if (!player) throw new ServiceError({
    message: "Player does not exist",
    code: "teams.players.remove.P404",
    status: 400,
  })
  if (!team) throw new ServiceError({
    message: "Team does not exist",
    code: "teams.players.remove.T404",
    status: 400,
  })

  try {
    const now = new Date()
    const contractData = playersTeamsRepository.create({
      player,
      team,
      startAt,
      endAt,
      salary,
      createdAt: now,
      updatedAt: now
    })
    return await playersTeamsRepository.save(contractData)
  } catch (error) {
    throw new ServiceError({
      message: error.message
    })
  }


}
