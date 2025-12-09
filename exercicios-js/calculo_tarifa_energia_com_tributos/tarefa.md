## 🚀 Desafio Avaliativo: Cálculo da Tarifa de Energia Elétrica com Tributos

O objetivo do exercício é desenvolver um código em Python para calcular o valor final da Tarifa de Energia Elétrica R$\/kWh, aplicando os tributos PIS/PASEP, COFINS e ICMS.

### 1. Composição da Tarifa e Dados Iniciais

A tarifa final de energia elétrica que o consumidor paga é composta pela Tarifa de Energia (TE), que cobre a compra e transmissão da energia, e a Tarifa de Uso do Sistema de Distribuição (TUSD), que remunera a distribuidora.

Os valores das tarifas sem impostos e as alíquotas dos tributos são:

Componente | Tipo | Valor (R\$/kWh ou %)
---|---|---
TE (Tarifa de Energia) | Sem Imposto | R\$ 0,35
TUSD (Tarifa de Uso do Sistema) | Sem Imposto | R\$ 0,45
PIS/PASEP | Alíquota | 0,82%
COFINS | Alíquota | 3,77%
ICMS | Alíquota | 18,00%

### 2. Metodologia de Cálculo dos Impostos

#### a. Cálculo da tarifa com Impostos

A equação para calcular o valor da tarifa com impostos é dada por:

$$tarifa_{com\_impostos} = \frac{tarifa_{sem\_impostos}}{(1 - icms) * (1 - pisPasep - cofins)}$$

#### b. Cálculo da Tarifa Final

O valor final da tarifa é o resultado da soma da TE e da TUSD com impostos, dado pela equação:

$$tarifa\_final_{com\_impostos} = TE + TUSD$$

### 3. Requisitos do código

a. Utilize os valores da tabela como dados de entrada;

b. Converta todos os valores percentuais para decimais antes de usá-los nas equações (Exemplo: 18% é igual a 0.18);

c. Calcule separadamente as tarifas com impostos: TE e TUSD;

d. Calcule a Tarifa Final somando a TE e a TUSD.
