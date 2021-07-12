import { getRepository } from "typeorm";
import { Team } from "../../models/Team";
import { ServiceError } from "../../util/ServiceError";

interface CreateTeamServiceDTO {
  name: string
  abbr: string
  description: string
  foundationAt?: Date
}

export async function CreateTeamService({
  name,
  abbr,
  description,
  foundationAt
}: CreateTeamServiceDTO) {

  const teamsRepository = getRepository(Team)
  // adicionar validações de schema e tal
  try {
    const now = new Date()
    const teamData = teamsRepository.create({
      name,
      abbr,
      description,
      foundationAt,
      createdAt: now,
      updatedAt: now,
    })
    return await teamsRepository.save(teamData)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
