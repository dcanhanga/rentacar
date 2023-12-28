import { ListSpecificationsController } from './ListSpecifications.controller';
import { ListSpecificationsUseCase } from './ListSpecifications.useCase';
import { SpecificationsRepository } from '@cars/repositories/Specifications.repository';

const specificationSRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationSRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };
