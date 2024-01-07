import { container } from 'tsyringe';

import { UsersRepository } from '@accounts/repositories/implementation/user';
import { type IUsersRepository } from '@accounts/repositories/interface/IUsersRRepository';
import { CategoriesRepository } from '@cars/repositories/implementations/categories';
import { SpecificationsRepository } from '@cars/repositories/implementations/specifications';
import { type ICategoriesRepository } from '@cars/repositories/interfaces/ICategoriesRepository';
import { type ISpecificationRepository } from '@cars/repositories/interfaces/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);
container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
