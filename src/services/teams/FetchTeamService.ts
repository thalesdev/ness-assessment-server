import { getRepository } from "typeorm";
import { Team } from "../../models/Team";
import { ServiceError } from "../../util/ServiceError";

interface FetchTeamServiceDTO {
  teamId: string
}

export async function FetchTeamService({
  teamId
}: FetchTeamServiceDTO) {

  const teamsRepository = getRepository(Team)

  const team = await teamsRepository.findOne(teamId, {
    relations: ['players', 'players.player']
  });
  if (!team) throw new ServiceError({
    message: "Team does not exist",
    code: "team.fetch.T404",
    status: 400,
  })

  return team;

}
