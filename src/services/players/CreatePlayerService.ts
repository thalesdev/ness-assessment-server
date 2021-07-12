import { getRepository } from "typeorm";
import { Position } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";
import { Player } from "../../models/Player";

interface CreatePlayerServiceDTO {
  name: string
  positionId: string
}

export async function CreatePlayerService({
  name,
  positionId,
}: CreatePlayerServiceDTO) {

  const positionsRepository = getRepository(Position)
  const playersRepository = getRepository(Player)

  const position = await positionsRepository.findOne(positionId)
  if (!position) throw new ServiceError({
    message: ""
  })


  try {
    const now = new Date()
    const playerData = playersRepository.create({
      name,
      position,
      createdAt: now,
      updatedAt: now,
    })
    return await playersRepository.save(playerData)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
