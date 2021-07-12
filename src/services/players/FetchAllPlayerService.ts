import { getRepository } from "typeorm";
import { Player } from "../../models/Player";
import { ServiceError } from "../../util/ServiceError";

export async function FetchAllPlayerService() {

  const playersRepository = getRepository(Player)
  try {
    const players = await playersRepository.find({
      relations: ['position', 'contracts', 'contracts.team']
    });
    return players;
  } catch (err) {
    throw new ServiceError({
      message: err.message
    })
  }
}
