


let nomeUsuario = "Junior"
let vitoriasNaSemana = [14, 5, 15, 8]
let derrotasNaSemana = [7, 5, 10, 4]
let totalVitoriasMes = vitoriasNaSemana[0] + vitoriasNaSemana[1] + vitoriasNaSemana[2] + vitoriasNaSemana[3]
let totalDerrotasMes = derrotasNaSemana[0] + derrotasNaSemana[1] + derrotasNaSemana[2] + derrotasNaSemana[3]


console.log (`
    O usuário de nome ${nomeUsuario}, jogou patidas do seu jogo favorito por um mês e esses foram seus resultados: 
    Na Primeira semana, ${nomeUsuario} jogou 21 Partidas, Vencendo ${vitoriasNaSemana[0]} e Perdendo ${derrotasNaSemana[0]}!
    Na Segunda semana, ele não conseguiu jogar muito, pois estava ocupado, portanto, jogou 10 Partidas, Vencendo ${vitoriasNaSemana[1]} e Perdendo ${derrotasNaSemana[1]}!
    Na Terceira semana, ${nomeUsuario} estava motivado pra pegar um bom Rank e jogou 25 Partidas, Vencendo ${vitoriasNaSemana[2]} e Perdendo ${derrotasNaSemana[2]}!
    E por fim, em sua última semana do mês, ele jogou 12 Partidas, Venceu ${vitoriasNaSemana[3]} e Perdeu ${derrotasNaSemana[3]}!
`)


let numeroDeVitorias = vitoria(totalVitoriasMes, totalDerrotasMes )

function vitoria (vitoria, derrota) {
    
    let total = vitoria - derrota
    return total
}


let ranking = " "

switch(true) {

    case numeroDeVitorias <= 10:
        ranking = "Ferro!"
        break

    case numeroDeVitorias >= 11 || numeroDeVitorias <= 20:
        ranking = "Bronze!"
        break

    case numeroDeVitorias >= 21 || numeroDeVitorias <= 50:
        ranking = "Prata!"
        break

    case numeroDeVitorias >= 51 || numeroDeVitorias <= 80:
        ranking = "Ouro!"
        break

    case numeroDeVitorias >= 81 || numeroDeVitorias <= 90:
        ranking = "Diamante!"
        break

    case numeroDeVitorias >= 91 || numeroDeVitorias <= 100:
        ranking = "Lendário!"
        break

    case numeroDeVitorias >= 101 :
        ranking = "Imortal!"
        break

    default:
        console.log ("Erro!")
        break
}


console.log (`
    Portanto, ${nomeUsuario} tem saldo de ${numeroDeVitorias} vitórias, ficando com o ranking de ${ranking}
`)