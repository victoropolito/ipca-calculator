# Calculadora de Reajuste de IPCA

Este projeto implementa uma calculadora de reajuste baseada no IPCA (Índice de Preços ao Consumidor Amplo), utilizando dados históricos locais. A aplicação é uma API REST desenvolvida em Node.js com Express, que permite calcular o reajuste do valor monetário entre períodos específicos, além de consultar informações históricas do IPCA.

## Sumário

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)

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

1. Rodando a calculadora:
   ```bash
   node index.js
   ```