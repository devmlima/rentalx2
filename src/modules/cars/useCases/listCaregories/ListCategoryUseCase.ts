import { Category } from '../../model/Categories';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private _categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    console.info('Rentalx - ListCategoryUseCase :: Init execute')
    return this._categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
