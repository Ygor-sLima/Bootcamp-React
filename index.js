var container = document.getElementById("app");
//var titulo = document.createElement("h1");
//titulo.innerHTML = "Título inserido por JS :o";
//container.appendChild(titulo);

function Contador(props) {
    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero+1);
        //numero++;
        console.log("somei e ficou = " + numero);
    }

    function subtrair() {
        setNumero(numero-1);
        //numero--;
        console.log("subtrai e ficou = "+numero);
    }

    return (
        <a>
            <h1>{props.titulo}</h1>
            <img src={props.src} alt={props.titulo}/>
            <h2>Votos: {numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </a>
    );
}

function App(props) {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <li>
                <Contador titulo="Meu Amigo Totoro" src="https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1988-Meu-Amigo-Totoro.jpg?w=279&ssl=1"/>
                <Contador titulo="Túmulo dos Vagalumes" src="https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/T%C3%BAmulo-dos-Vagalumes.jpg?w=279&ssl=1"/>
                <Contador titulo="Princesa Mononoke" src="https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1997-Princesa-Mononoke.jpg?w=279&ssl=1"/>
            </li>
            <li>
                <Contador titulo="A Viagem de Chihiro" src="https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2001-A-Viagem-de-Chihiro.jpg?w=279&ssl=1"/>
                <Contador titulo="Ponyo" src="https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2008-Ponyo.jpg?w=279&ssl=1"/>
                <Contador titulo="O Conto da Princesa Kaguya" src="https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Conto-da-Princesa-kaguya.jpg?w=279&ssl=1"/>
            </li>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App,null, null), container);
//ReactDOM.render(App(), container);

// 1. PascalCase -> Componentes em React seguem esse padrão
// 2. camelCase -> Funções em JavaScript
// 3. Componentes só podem retornar um elemento por Componente
// saída => aninhar em React.Fragment
// 4. Podemos criar propriedades para nossos Componentes (props)