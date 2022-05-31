import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    console.info('Rentalx - CreateSpecificationUseCase :: Init execute');

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
