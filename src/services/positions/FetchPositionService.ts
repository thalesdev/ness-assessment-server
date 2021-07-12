import { getRepository } from "typeorm";
import { Position } from "../../models/Position";
import { ServiceError } from "../../util/ServiceError";

interface FetchPositionServiceDTO {
  positionId: string
}

export async function FetchPositionService({
  positionId
}: FetchPositionServiceDTO) {

  const positionsRepository = getRepository(Position)

  const position = await positionsRepository.findOne(positionId);
  if (!position) throw new ServiceError({
    message: "Position does not exist",
    code: "position.fetch.T404",
    status: 400,
  })

  return position;

}
