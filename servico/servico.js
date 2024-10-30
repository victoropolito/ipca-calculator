const dados = require('../dados/dados')

function validaParametro(param) {
  return !isNaN(param)
}

function historicoInflacao() {
  return dados.historicoInflacao
}

function historicoInflacaoAno(ano) {
  return validaParametro(ano) ? dados.historicoInflacao.filter(dado => dado.ano === ano) : null
}

function historicoPorId(id) {
  return validaParametro(id) ? dados.historicoInflacao.find(dado => dado.id === id) : null
}

function retornaPeriodo(mesInicial, mesFinal, anoInicial, anoFinal) {
  return dados.historicoInflacao.filter(periodo => {
    const dentroDoAno = periodo.ano >= anoInicial && periodo.ano <= anoFinal
    const dentroDoMes = (periodo.ano !== anoInicial || periodo.mes >= mesInicial) &&
                        (periodo.ano !== anoFinal || periodo.mes <= mesFinal)
    return dentroDoAno && dentroDoMes
  })
}

function calculoReajuste(valor, mesInicial, mesFinal, anoInicial, anoFinal) {
  if (!validaParametro(valor)) return null

  const periodo = retornaPeriodo(mesInicial, mesFinal, anoInicial, anoFinal)
  const resultadoIPCA = periodo.reduce((acc, { ipca }) => acc * (1 + ipca / valor), 1)

  return valor * resultadoIPCA
}

module.exports = {
  inflacao: {
    dados,
    historicoInflacao,
    historicoInflacaoAno,
    historicoPorId,
    retornaPeriodo,
    calculoReajuste,
  },
}