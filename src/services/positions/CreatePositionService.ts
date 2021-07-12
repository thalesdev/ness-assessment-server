import { getRepository } from "typeorm";
import { Position, PositionSectionType } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";

interface CreatePositionServiceDTO {
  name: string
  abbr: string
  description: string
  section: PositionSectionType
}

export async function CreatePositionService({
  name,
  abbr,
  description,
  section
}: CreatePositionServiceDTO) {

  const positionsRepository = getRepository(Position)
  // adicionar validações de schema e tal


  try {
    const now = new Date()
    const positionData = positionsRepository.create({
      name,
      abbr,
      section,
      description,
      createdAt: now,
      updatedAt: now,
    })
    return await positionsRepository.save(positionData)
  } catch (error) {
    throw new ServiceError({ message: error.message })
  }

}
