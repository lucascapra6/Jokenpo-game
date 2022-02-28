let score = {
    player: 0,
    pc: 0
}
const _pcChooses = ['pedra', 'papel', 'tesoura']
const _selectedPcChoose = (pcChoose) => {
    const randomPcSelection = Math.floor(Math.random() * 3)
    return pcChoose[randomPcSelection]
}

class JoKenPo {
    constructor(playerName = 'Lucas') {
        this.player = playerName
        this.score = score
    }
}
Object.assign(JoKenPo.prototype, score)

class Rock extends JoKenPo {
    constructor(playerName) {
        super(playerName);
    }
    play() {
        const selectedPcChoose = _selectedPcChoose(_pcChooses)
        this.logWinner(selectedPcChoose)
        this.updateScore(selectedPcChoose)
    }
    logWinner(pcChooseSelected) {
        const options = {
            pedra: 'Empate',
            papel: 'Você perdeu!',
            tesoura: 'Você venceu!'
        }
        console.log(`Pc jogou ${pcChooseSelected}`)
        console.log(options[pcChooseSelected])
    }
    updateScore(pcChooseSelected) {
        if(pcChooseSelected === 'pedra') return null
        return pcChooseSelected === 'papel' ? score.pc++ : score.player++
    }
}
class Paper extends JoKenPo {
    constructor(playerName) {
        super(playerName);
    }
    play() {
        const selectedPcChoose = _selectedPcChoose(_pcChooses)
        this.logWinner(selectedPcChoose)
        this.updateScore(selectedPcChoose)
    }
    logWinner(pcChooseSelected) {
        const options = {
            pedra: 'Você venceu!',
            papel: 'Empate',
            tesoura: 'Você perdeu!'
        }
        console.log(`Pc jogou ${pcChooseSelected}`)
        console.log(options[pcChooseSelected])
    }
    updateScore(pcChooseSelected) {
        if(pcChooseSelected === 'papel') return null
        return pcChooseSelected === 'tesoura' ? score.pc++ : score.player++
    }
}
class Scissors extends JoKenPo {
    constructor(playerName) {
        super(playerName);
    }
    play() {
        const selectedPcChoose = _selectedPcChoose(_pcChooses)
        this.logWinner(selectedPcChoose)
        this.updateScore(selectedPcChoose)
    }
    logWinner(pcChooseSelected) {
        const options = {
            pedra: 'Você perdeu!',
            papel: 'Você ganhou!',
            tesoura: 'Empate!'
        }
        console.log(`Pc jogou ${pcChooseSelected}`)
        console.log(options[pcChooseSelected])
    }
    updateScore(pcChooseSelected) {
        if(pcChooseSelected === 'tesoura') return null
        return pcChooseSelected === 'pedra' ? score.pc++ : score.player++
    }
}

const jokenPo = new JoKenPo()
const pedra = new Rock()
const papel = new Paper()
const tesoura = new Scissors()

pedra.play()
papel.play()
tesoura.play()
console.log(jokenPo)
