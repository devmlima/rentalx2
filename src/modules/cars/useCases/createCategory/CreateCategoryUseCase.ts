import {
  ICategoriesRepository,
  ICategoryDTO,
} from '../../repositories/ICategoriesRepository';

class CreateCategoryUseCase {
  constructor(private _categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICategoryDTO): void {
    console.info('Rentalx - CreateCategoryUseCase :: Init execute');
    const categoryAlreadyExists = this._categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Categoria já cadastrada!');
    }

    this._categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
