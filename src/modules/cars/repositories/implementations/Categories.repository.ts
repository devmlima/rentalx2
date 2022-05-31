import { Category } from '../../model/Categories';
import { ICategoriesRepository, ICategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;
  private constructor() {
    this.categories = [];
  }

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      return (CategoriesRepository.INSTANCE = new CategoriesRepository());
    }

    return CategoriesRepository.INSTANCE;
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICategoryDTO): void {
    const category = new Category();

    Object.assign(category, { name, description, create_at: new Date() });
    this.categories.push(category);
  }

  findAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find(category => category.name === name);
  }
}

export { CategoriesRepository };
