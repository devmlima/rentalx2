import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    console.info('Rentalx - ListCategoryController :: Init handle')
    const rows = this.listCategoryUseCase.execute();
    return res.status(201).json(rows);
  }
}

export { ListCategoryController };
