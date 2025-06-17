let divResultados = document.getElementById("div_resultado_chute");
let divResultados2 = document.getElementById("div_resultado_chute2");
let divResultados3 = document.getElementById("div_resultado_chute3");
let divResultados4 = document.getElementById("div_resultado_chute4");
let divPrincipal = document.getElementById("div_principal");
let divChute = document.getElementById("div_chute_preco");
let divInicio = document.getElementById("div_inicio");
let divDash = document.getElementById("div_dash");
let tipoTempoBrasil = "anos "
let tipoTempoEua = "anos "
let salarioMinimoBrasil = 0;
let salarioMinimoEua = 0;
let salarioEscolhido = 0;
let erroPercentual = 0;
let assertividade = 0;
let numeroAleatorio = 0;
let precoChutado = 0;
let precoReal = 0;
let erro = 0;
let numAntigo = 0;
let carrosBrasil = null;
let carrosEua = null;

let tempoParaComprarEua = 0;
let tempoParaComprarBrasil = 0;

let idade = 0;
let qtdAguaPorDia = 0;

const piscinas = [
  {
    imagem: "https://leisurepoolsusa.com/wp-content/uploads/2021/10/Leisure-Pools-Fiji-Plunge-small-pool.webp",
    nome: "Piscina Pequena (Plunge)",
    capacidadeLitros: 2000  // piscinas plunge comuns variam entre 1.000 e 3.200 L :contentReference[oaicite:2]{index=2}
  },
  {
    imagem: "https://articles.bluehaven.com/hs-fs/hubfs/small-Roman-pool-and-spa.jpg?width=900&name=small-Roman-pool-and-spa.jpg",
    nome: "Piscina Média (12 m × 6 m × 1,5 m)",
    capacidadeLitros: 108000  // 12×6×1,5 m ≈ 108 000 L :contentReference[oaicite:3]{index=3}
  },
  {
    imagem: "https://via.placeholder.com/400x300?text=Piscina+Grande",
    nome: "Piscina Grande (Olimpíca)",
    capacidadeLitros: 2500000  // piscina olímpica ≈ 2,5 milhões de litros :contentReference[oaicite:4]{index=4}
  }
];

function iniciar() {
    numeroAleatorio = Math.floor(Math.random() * 8);

    while (numeroAleatorio == numAntigo) {
        numeroAleatorio = Math.floor(Math.random() * 8);
        console.log("Refez")
    }

    divChute.classList.remove("hide");
    divInicio.classList.add("hide");
    console.log(numeroAleatorio);
    segundaPagina();
}



function segundaPagina() {
    carrosBrasil = listaCarrosBrasil[numeroAleatorio];
    carrosEua = listaCarrosEua[numeroAleatorio];

    numAntigo = numeroAleatorio;
    console.log(numAntigo);

    resultadoEua2.innerHTML = `
    <div class="titulo-segunda-pagina">
        <p>${carrosEua.nome}</p>
        <img src="../assets/banners/eua.png" class="img-pais">
    </div>
        <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" class="img-carros">
        `;
}

// FALAR NO PROJETO QUE SE O CHUTE FOI MUITO DISTANTE ELE VAI CONSIDERAR COMO 0% DE ASSERTIVIDADE

function chutarPreco() {
    divResultados.classList.remove("hide");
    divChute.classList.add("hide");
    console.log(precoChutado);
    calculoAssertividade();
}

function calculoAssertividade() {
    resultadoDoChute.innerHTML = `
            <h1>Você já bebeu agua hoje?</h1>
        `;
    // enviarAssertividade();
}

function precoNosEua() {
    resultadoDoChute2.innerHTML = `
            <h1>Qual o principal motivo que te leva a comprarr agua engarrafada?</h1>
            <label><input type="radio" name="pergunta1" value="sim">Pela água, obviamente.</label><br>
            <label><input type="radio" name="pergunta1" value="nao"> Pela garrafa, que vai virar um peso de papel estiloso na minha mesa.</label><br>
            <label><input type="radio" name="pergunta1" value="talvez"> Para fazer aquele barulhinho satisfatório de "CREC" ao amassar depois.</label><br>
            <label><input type="radio" name="pergunta1" value="nao_sei">  Para ter algo na mão e parecer uma pessoa misteriosa e saudável na academia.</label><br><br>
        `;
}

function precoNoBrasil() {
    resultadoDoChute3.innerHTML = `
        <h1>Com idade de idade voce já consumiu 123728139 L de agua em sua vida inteira!</h1>
    `;
}

function resultadoTempoDeCompra() {
    console.log("chegou aqui")
    resultadoDoChute4.innerHTML = `
    <h1>Isso equivale a uma Psicina media!</h1>
    <h1>IMG Piscina</h1>
    `;
}

function resultados() {
    enviarChuteUsuario();
    divResultados.classList.add("hide");
    divResultados2.classList.remove("hide");
    precoNosEua();
}

function resultados2() {
    divResultados2.classList.add("hide");
    divResultados3.classList.remove("hide");
    precoNoBrasil();
}

function resultados3() {
    divResultados3.classList.add("hide");
    divResultados4.classList.remove("hide");
    resultadoTempoDeCompra();
}

function resultados4() {
    pegarListaDeChutes(sessionStorage.ID_USUARIO);
    divResultados4.classList.add("hide");
    divPrincipal.classList.remove("hide");
    terceiraPagina();
}

function outroCarro() {
    divChute.classList.remove("hide");
    divPrincipal.classList.add("hide");
    divDash.classList.add("hide");
    segundaPagina();
    iniciar();
}

function calcularTempoDeCompra() {
    salarioMinimoBrasil = 0;
    salarioMinimoEua = 0;
    salarioEscolhido = Number(ipt_select.value);
    carrosEua = listaCarrosEua[numeroAleatorio];
    carrosBrasil = listaCarrosBrasil[numeroAleatorio];

    console.log(salarioEscolhido);

    if (Number.isNaN(salarioEscolhido)) {
        salarioMinimoBrasil = 1516;
        salarioMinimoEua = 1256;
    } else {
        salarioMinimoBrasil = salarioEscolhido;
        salarioMinimoEua = salarioEscolhido;
    }

    tempoParaComprarEua = carrosEua.preco / salarioMinimoEua;
    tempoParaComprarBrasil = carrosBrasil.preco / salarioMinimoBrasil;

    tempoParaComprarBrasil = tempoParaComprarBrasil / 12;

    tempoParaComprarEua = tempoParaComprarEua / 12;

    if (tempoParaComprarBrasil < 1) {
        tempoParaComprarBrasil = tempoParaComprarBrasil * 10
        tipoTempoBrasil = "meses "
    }
    if (tempoParaComprarEua < 1) {
        tempoParaComprarEua = tempoParaComprarEua * 10
        tipoTempoEua = "meses "
    }
}

function terceiraPagina() {
    resultadoBrasil.innerHTML = `
        <img src="../assets/banco_de_carros/brasil/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
        <div class="div-titulo">
            <p class="titulo-carro">${carrosBrasil.nome}</p>
        </div>
        <p class="descricao">Preço do carro R$ ${carrosBrasil.preco.toLocaleString(
        "pt-BR"
    )}</p>
        <p class="descricao">Com uma renda de R$ ${salarioMinimoBrasil.toLocaleString(
        "pt-BR"
    )}</p> 
        <p class="descricao">Serão necessarios ${tempoParaComprarBrasil.toFixed(1)} ${tipoTempoBrasil} para comprar esse carro<p>
        <a href="${carrosBrasil.link}" target="_blank">Link</a>
        `;

    resultadoEua.innerHTML = `
        <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
        <div class="div-titulo">
            <p class="titulo-carro">${carrosEua.nome}</p>
        </div>
        <p class="descricao">Preço do carro $ ${carrosEua.preco.toLocaleString(
        "pt-BR"
    )}</p> 
        <p class="descricao">Com uma renda de $ ${salarioMinimoEua.toLocaleString(
        "pt-BR"
    )}</p> 
        <p class="descricao">Serão necessarios ${tempoParaComprarEua.toFixed(1)} ${tipoTempoEua} para comprar esse carro<p>
        <a href="${carrosEua.link}" target="_blank">Link</a>
        `;
}

function sair() {
    window.location = "../index.html";
}

function dash() {
    let nome = sessionStorage.getItem("NOME_USUARIO");
    let id = sessionStorage.getItem("ID_USUARIO");
    let email = sessionStorage.getItem("EMAIL_USUARIO");
    if (nome == null && id == null && email == null) {
        window.location = "../pages/login.html";
    } else {
        b_usuario.innerHTML = nome;
        divDash.classList.remove("hide");
        chamarGraficos();
    }
}

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let proximaAtualizacao;

function chamarGraficos() {
    const idUsuario = sessionStorage.ID_USUARIO;

    graficos.innerHTML = `
        <canvas id="myChartCanvas${idUsuario}"></canvas>
        `;
    obterDadosGrafico(idUsuario);
}

function obterDadosGrafico(idUsuario) {
    console.log(idUsuario);

    fetch(`/medidas/ultimas/${sessionStorage.ID_USUARIO}`, { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    plotarGrafico(resposta, idUsuario);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e,
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta, idUsuario) {
    console.log("iniciando plotagem do gráfico...");
    // console.log("essa é a resposta", resposta[2].assertividade);
    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [
            {
                label: "% Assertividade ",
                data: [],
                fill: false,
                backgroundColor: "rgb(46, 204, 113)",
                borderColor: "rgb(46, 204, 113)",
                tension: 0.1,
            },
        ],
    };

    console.log("----------------------------------------------");
    console.log(
        'Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":'
    );
    console.log(resposta);

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        labels.push(resposta[i].assertividade);
        dados.datasets[0].data.push(resposta[i].assertividade);
        // dados.datasets[1].data.push(registro.temperatura);
    }

    console.log("----------------------------------------------");
    console.log("O gráfico será plotado com os respectivos valores:");
    console.log("Labels:");
    console.log(labels);
    console.log("Dados:");
    console.log(dados.datasets);
    console.log("----------------------------------------------");

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: "bar",
        data: dados,
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas${idUsuario}`),
        config
    );

    setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 5000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas,

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models

// 

function enviarChuteUsuario() {
    console.log("enviou")
}

function pegarListaDeChutes(idUsuario) {

    fetch(`/dash/pegarListaDeChutes${idUsuario}`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao buscar posts");
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('listaDeChutes');

            console.log(data)

            container.innerHTML = ``

            if (data.length === 0) {
                container.innerHTML = "<p>Nenhum post encontrado.</p>";
                return;
            }
            let i = data.length
            data.forEach(post => {
                const card = document.createElement("div");

                card.className = "div-resultados-2";
                card.innerHTML = `
                            <h3>${i}º Chute</h3>
                            <div class="elementos-row">
                                <img src="${post.img}" alt="Imagem do carro" class="img-resultado2">
                                <div class="elementos-column">
                                    <p>Asssertividade: ${post.assertividade} %</p>
                                    <progress value="${post.assertividade}" max="100" class="progress"></progress>
                                </div>
                            </div>
                            <div class="elementos-row-p" style="margin-top: 10px">
                                <p class="margin">Nome:${post.nomeCarro} </p>
                                <p class="margin">Preço Chutado: $${post.precoChutado.toLocaleString("pt-BR")}</p>
                                <p class="margin">Preço Real: $${post.precoReal.toLocaleString("pt-BR")} </p>
                            </div>
                            <hr>
                        `;
                container.appendChild(card);
                i--
            });
        })
        .catch(error => {
            console.error("Erro:", error);
            document.getElementById('postContainer').innerHTML = "<p>Erro ao carregar posts.</p>";
        });
}
