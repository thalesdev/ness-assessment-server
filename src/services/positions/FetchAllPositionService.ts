import { getRepository } from "typeorm";
import { Position } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";

export async function FetchAllPositionService() {

  const positionsRepository = getRepository(Position)
  try {
    const positions = await positionsRepository.find();
    return positions;
  } catch (err) {
    throw new ServiceError({
      message: err.message
    })
  }
}
