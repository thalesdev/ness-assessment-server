import { getRepository } from "typeorm";
import { Player } from "../../models/Player";
import { ServiceError } from "../../util/ServiceError";

interface FetchPlayerServiceDTO {
  playerId: string
}

export async function FetchPlayerService({
  playerId
}: FetchPlayerServiceDTO) {

  const playersRepository = getRepository(Player)

  const player = await playersRepository.findOne(playerId, {
    relations: ['position', 'contracts', 'contracts.team']
  });
  if (!player) throw new ServiceError({
    message: "Player does not exist",
    code: "player.fetch.P404",
    status: 400,
  })

  return player;

}
