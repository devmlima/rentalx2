import { Category } from '../model/Categories';

interface ICategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICategoryDTO): void;
}

export { ICategoriesRepository, ICategoryDTO };
