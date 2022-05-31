import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoryController } from '../modules/cars/useCases/listCaregories'

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res)
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res)
});

export default categoriesRoutes;