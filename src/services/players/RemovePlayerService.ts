import { getRepository } from "typeorm";
import { Player } from "../../models/Player";
import { ServiceError } from "../../util/ServiceError";

interface RemovePlayerServiceDTO {
  playerId: string
}

export async function RemovePlayerService({
  playerId
}: RemovePlayerServiceDTO) {

  const playersRepository = getRepository(Player)

  const player = await playersRepository.findOne(playerId, {
    relations: ['position']
  });
  if (!player) throw new ServiceError({
    message: "Player does not exist",
    code: "player.remove.P404",
    status: 400,
  })
  try {
    return await playersRepository.remove(player)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }
}
