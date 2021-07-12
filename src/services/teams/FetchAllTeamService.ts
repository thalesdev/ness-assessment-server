import { getRepository } from "typeorm";
import { Team } from "../../models/Team";
import { ServiceError } from "../../util/ServiceError";

export async function FetchAllTeamService() {

  const teamsRepository = getRepository(Team)
  try {
    const teams = await teamsRepository.find({
      relations: ['players', 'players.player']
    });
    return teams;
  } catch (err) {
    throw new ServiceError({
      message: err.message
    })
  }
}
