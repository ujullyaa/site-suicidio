import { Router } from 'express';
import { buscarTaxas } from '../controllers/taxasController';

const router = Router();

router.get('/', buscarTaxas);

export default router;