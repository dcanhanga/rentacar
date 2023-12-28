import { CreateSpecificationController } from './CreateSpecification.controller';
import { CreateSpecificationUseCase } from './CreateSpecification.useCase';
import { SpecificationsRepository } from '@cars/repositories/Specifications.repository';

const createSpecificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(createSpecificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
