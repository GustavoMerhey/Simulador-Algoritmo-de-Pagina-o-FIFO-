/*
MR -> Memória Principal
MS -> Memória Secundária
PP -> Problema de Paginação

*/

const MR = [2, 3, 1, 'a', 'b', 3, 1, 1, 'c', 'd', 1, 'a']
const MS = [-1, -1, -1, -1]
var PP = 0

function AlgoritmoSimulacaoFifo() {
    try {
        for (let a = 0; a <= MR.length; a++) {
            a = 0;
            for (let b = 0; b <= MS.length; b++) {
                if (MS.indexOf(MR[a]) >= 0) {
                    MR.shift()
                    break;
                }
                else {
                    PP++
                    MS.unshift(MR[a])
                    MS.pop()
                    MR.shift()
                    break;
                }
            }
        }
    } catch (error) {
        console.error('Ocorreu uma falha na simulação do algoritmo FIFO. Erro: ', error)
    }
    console.log('Houve ' + PP + ' falhas de paginação utilizando o algoritmo FIFO')
}
AlgoritmoSimulacaoFifo()
