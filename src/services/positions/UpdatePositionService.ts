import { getRepository } from "typeorm";
import { Position, PositionSectionType } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";

interface UpdatePositionServiceDTO {
  name: string
  abbr: string
  description: string
  section: PositionSectionType
  positionId: string
}

export async function UpdatePositionService({
  name,
  abbr,
  description,
  section,
  positionId
}: UpdatePositionServiceDTO) {

  const positionsRepository = getRepository(Position)
  // adicionar validações de schema

  const position = await positionsRepository.findOne(positionId);
  if (!position) throw new ServiceError({
    message: "Position does not exist",
    code: "position.update.T404",
    status: 400,
  })

  try {
    const now = new Date()
    const positionData = positionsRepository.merge(position, {
      name,
      abbr,
      description,
      section,
      updatedAt: now,
    })
    return await positionsRepository.save(positionData)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
