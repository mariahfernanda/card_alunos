class card extends HTMLElement {
    constructor(){
        super();
        this.build()
    }
    build () {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `
        .card {
            width: 250px;
            height: 250px;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color: ${this.bgcolor()};
        }
        
        .card-text{
            width: 50%;
            padding: 4px;
            text-align: center;
            text-transform: uppercase;
            color: #fff;
            
            border-radius: 12px;
            box-shadow: 0 0 2px #000;
        }

        .card-image{
            background-color: #fff;
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-image: ${this.image()};
            background-size: cover;
            box-shadow: inset 0 0 8px #000;
        }
        
        `
            return style
    }

    createCard(){
        // <div class="card">
        // <div class="card-text">Fernanda</div>
        // <div class="card-image"></div>
        // <div class="card-text">DS2T</div>
        // </div>
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text"> ${this.name()}</div>
            <div class="card-image"></div>
            <div class="card-text"> ${this.turma()}</div>
        `
    
        return card
    }

    bgcolor(){
        const color = this.getAttribute('data-bgcolor') ?? "#0044"

        return color
    }

    name(){
        const name = this.getAttribute('data-bgimage') ?? "Aluno(a, e)"

        return name
    }

    image(){
        const imagem = this.getAttribute('data-bgname') ?? "url(./img/2.png)"

        return imagem
    }

    turma(){
        const turma = this.getAttribute('data-bgturma')?? "ds2t"
        return turma
    }
}

customElements.define('card-aluno',card)