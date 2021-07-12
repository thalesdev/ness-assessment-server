import { getRepository } from "typeorm";
import { Player } from "../../models/Player";
import { Position } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";

interface UpdatePlayerServiceDTO {
  name: string
  playerId: string
  positionId: string
}

export async function UpdatePlayerService({
  name,
  playerId,
  positionId
}: UpdatePlayerServiceDTO) {

  const positionsRepository = getRepository(Position)
  const playersRepository = getRepository(Player)
  // adicionar validações de schema

  const position = await positionsRepository.findOne(positionId);
  if (positionId && !position) throw new ServiceError({
    message: "Position does not exist",
    code: "player.update.P404",
    status: 400,
  })

  const player = await playersRepository.findOne(playerId, {
    relations: ['position']
  });
  if (!player) throw new ServiceError({
    message: "Player does not exist",
    code: "player.update.PL404",
    status: 400,
  })

  try {
    const now = new Date()
    const playerData = playersRepository.merge(player, {
      name,
      position: position || player.position,
      updatedAt: now,
    })
    return await playersRepository.save(playerData)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
