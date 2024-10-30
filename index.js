const express = require('express')
const app = express()

const { inflacao } = require('./servico/servico')

function validarAno(ano) {
  return ano && ano >= 2015 && ano <= 2023
}

app.get('/historicoIPCA/calculo', (req, res) => {
  const { valor, anoInicial, anoFinal, mesInicial, mesFinal } = req.query

  if (![valor, anoInicial, anoFinal, mesInicial, mesFinal].every(param => !isNaN(param))) {
    return res.status(400).json({ erro: 'Parâmetros inválidos!' })
  }

  const reajuste = inflacao.calculoReajuste(
    parseFloat(valor),
    parseInt(mesInicial),
    parseInt(mesFinal),
    parseInt(anoInicial),
    parseInt(anoFinal)
  )

  res.json({ reajuste })
})

app.get('/historicoIPCA/:id', (req, res) => {
  const id = parseInt(req.params.id)

  if (!id || isNaN(id)) {
    return res.status(400).json({ erro: 'ID inválido!' })
  }

  const historicoPorId = inflacao.historicoPorId(id)
  if (historicoPorId) {
    res.json({ historico: historicoPorId })
  } else {
    res.status(404).json({ erro: 'Histórico não encontrado!' })
  }
})

app.get('/historicoIPCA', (req, res) => {
  const { ano, anoInicial, anoFinal, mesInicial, mesFinal } = req.query

  if (anoInicial && anoFinal && mesInicial && mesFinal) {
    const periodo = inflacao.retornaPeriodo(
      parseInt(mesInicial),
      parseInt(mesFinal),
      parseInt(anoInicial),
      parseInt(anoFinal)
    )
    return res.json({ periodo })
  }

  if (!ano) {
    return res.json({ historico: inflacao.historicoInflacao() })
  }

  if (validarAno(parseInt(ano))) {
    return res.json({ historico: inflacao.historicoInflacaoAno(parseInt(ano)) })
  } else {
    res.status(404).json({ erro: 'Nenhum histórico para o ano especificado' })
  }
})

app.listen(8080, () => {
  console.log('API rodando na porta 8080')
})