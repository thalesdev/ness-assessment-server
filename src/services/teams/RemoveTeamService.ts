import { getRepository } from "typeorm";
import { Team } from "../../models/Team";
import { ServiceError } from "../../util/ServiceError";

interface RemoveTeamServiceDTO {
  teamId: string
}

export async function RemoveTeamService({
  teamId
}: RemoveTeamServiceDTO) {

  const teamsRepository = getRepository(Team)

  const team = await teamsRepository.findOne(teamId);
  if (!team) throw new ServiceError({
    message: "Team does not exist",
    code: "team.remove.T404",
    status: 400,
  })

  try {
    return await teamsRepository.remove(team)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
