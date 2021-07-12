import { getRepository } from "typeorm";
import { Position } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";

interface RemovePositionServiceDTO {
  positionId: string
}

export async function RemovePositionService({
  positionId
}: RemovePositionServiceDTO) {

  const positionsRepository = getRepository(Position)

  const position = await positionsRepository.findOne(positionId);
  if (!position) throw new ServiceError({
    message: "Position does not exist",
    code: "position.remove.T404",
    status: 400,
  })

  try {
    return await positionsRepository.remove(position)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
