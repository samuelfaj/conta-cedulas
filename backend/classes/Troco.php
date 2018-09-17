<?php
namespace Classes;

class Troco
{
    /**
     * Notas e moedas disponíveis no para o calculo
     */
    const MOEDAS = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.01];

    /**
     * Função que retorna a quantidade de notas e moedas que devem ser dadas
     * ao cliente para completar o valor de troco
     * @param float $valor Valor do troco
     * @return array Array contendo as notas e moedas
     */
    public function getQtdeNotas(float $valor) : array
    {
        $retorno = array();

        foreach (self::MOEDAS as $moeda) {
            while ($valor >= $moeda){
                $retorno[(string) $moeda]++;
                $valor -= $moeda;
            }
        }

        return $retorno;
    }
}