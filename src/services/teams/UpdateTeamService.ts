import { getRepository } from "typeorm";
import { Team } from "../../models/Team";
import { ServiceError } from "../../util/ServiceError";

interface UpdateTeamServiceDTO {
  name: string
  abbr: string
  description: string
  foundationAt?: Date
  teamId: string
}

export async function UpdateTeamService({
  name,
  abbr,
  description,
  foundationAt,
  teamId
}: UpdateTeamServiceDTO) {

  const teamsRepository = getRepository(Team)
  // adicionar validações de schema

  const team = await teamsRepository.findOne(teamId);
  if (!team) throw new ServiceError({
    message: "Team does not exist",
    code: "team.update.T404",
    status: 400,
  })

  try {
    const now = new Date()
    const teamData = teamsRepository.merge(team, {
      name,
      abbr,
      description,
      foundationAt,
      updatedAt: now,
    })
    return await teamsRepository.save(teamData)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
