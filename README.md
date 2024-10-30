# Calculadora de Reajuste de IPCA

Este projeto implementa uma calculadora de reajuste baseada no IPCA (Índice de Preços ao Consumidor Amplo), utilizando dados históricos locais. A aplicação é uma API REST desenvolvida em Node.js com Express, que permite calcular o reajuste do valor monetário entre períodos específicos, além de consultar informações históricas do IPCA.

## Sumário

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)

## Visão Geral

A API oferece as seguintes funcionalidades:
- Calcular o reajuste de um valor com base no IPCA em um período específico.
- Consultar dados históricos do IPCA por ano ou por um período de anos e meses.
- Consultar um histórico específico pelo ID do registro.

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) - versão 14 ou superior.
- [Git](https://git-scm.com/).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/victoropolito/ipca-calculator.git
   cd ipca-calculator
   ```

2. Instale as dependências do projeto::
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   node index.js
   ```

   A API estará disponível em 
   ```bash 
   http://localhost:8080.
   ```

## Uso

### Endpoints Disponíveis

#### Calcular o Reajuste IPCA

```http
GET /historicoIPCA/calculo
```

- Parâmetros de consulta:

i) valor (number): Valor inicial a ser reajustado.
ii) anoInicial, anoFinal (number): Ano de início e fim do período.
iii) mesInicial, mesFinal (number): Mês de início e fim do período.

- Exemplo de Uso:
```bash
curl "http://localhost:8080/historicoIPCA/calculo?valor=1000&anoInicial=2020&anoFinal=2021&mesInicial=1&mesFinal=12"
```

#### Consultar histórico completo:
```bash
GET /historicoIPCA
```

- Parâmetros de consulta opcionais:

i) ano (number): Ano específico para a consulta.
ii) anoInicial, anoFinal, mesInicial, mesFinal (number): Período específico para consulta.

- Exemplo de Uso:
```bash
curl "http://localhost:8080/historicoIPCA?ano=2022"
```

#### Consultar histórico por ID:

```bash
GET /historicoIPCA/:id
```

- Parâmetros de rota:

i) id (number): ID específico do registro no histórico.

- Exemplo de Uso:
```bash
curl "http://localhost:8080/historicoIPCA/5"
```