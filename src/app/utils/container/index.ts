import { container } from 'tsyringe';

import { CategoriesRepository } from '@modules/cars/repositories/categories';
import { type ICategoriesRepository } from '@modules/cars/repositories/interfaces/ICategoriesRepository';
import { type ISpecificationRepository } from '@modules/cars/repositories/interfaces/ISpecificationsRepository';
import { SpecificationsRepository } from '@modules/cars/repositories/specifications';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);
container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);
