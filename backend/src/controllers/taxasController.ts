import { Request, Response } from 'express';
import { obterDadosTaxas } from '../services/taxasService';

export const buscarTaxas = (req: Request, res: Response) => {
  try {
    const dados = obterDadosTaxas();
    res.json(dados);
  } catch (error) {
    res.status(500).json({ erro: 'Falha ao buscar as taxas de suicídio' });
  }
};