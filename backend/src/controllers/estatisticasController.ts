import { Request, Response } from 'express';
import { obterEstatisticasConsolidadas } from '../services/estatisticasService';

export const buscarDadosPainel = (req: Request, res: Response) => {
  try {
    const dados = obterEstatisticasConsolidadas();
    res.json(dados);
  } catch (error) {
    res.status(500).json({ erro: 'Falha ao processar as estatísticas' });
  }
};