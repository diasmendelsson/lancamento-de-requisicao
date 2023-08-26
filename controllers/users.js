// Incluir as Bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidade
const express = require('express');

// Chamar a função express
const router = express.Router();

//Incluir o arqivo possui a conexão com o banco de dados
const db = require("./../db/models")

// Criar a rota listar
router.get("/users", async (req, res) => {

    //Receber o numero da página, quando não é enviado o número da página é atribuido página 1 
    const { page = 1 } = req.query;

    // Limite de registros em cada página
    const limit = 10;

    // variavel com o numero da ultima pagina
    var lastPage = 1;

    // Contar a quantidade de registros no banco de dados
    const constUser = await db.Requisicao.count();

    //Acessa o if quando encontrar registro no banco de dados
    if (countUser !== 0) {
        // Calcular a ultima pagina
        lastPage = Math.ceil(countUser / limit);
    } else {
        return res.status(400).json({
            mensagem: "Erro: Nenhuma requisição encontrada!"
        })
    }

   
    // Recuperar as requisições do Banco de Dados
    const users = await db.Requisicao.findAll({

        //Indicar quais colunas recuperar
        attributes: ['id', 'veiculo', 'funcionario', 'data', 'tipo', 'valor'],

        //Ordenar os registros pela coluna id na forma decrescente
        order: [['id', 'ASC']],

        //Calcular a partir de qual registro deve retornar e o limiete de registros
        offset: Number((page * limit) - limit),
        limit: limit

    })

    //Acessa o if se encontrar o registro no banco de dados
    if (users) {
        //Criar o objeto com as informações para a paginação
        var pagination = {
            //Caminho
            path: '/users',
            //Página atual
            page,
            // URL da página anterior
            prev_page_url: page - 1 >= 1 ? page - 1 : false,
            //URL da próxima pagina
            next_page_url: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1), 
            //Ultima página
            lastPage,
            //Quantidade de registros
            total: countUser
        }


        return res.json({
            users,
            pagination
        })
    } else {
        return res.status(400).json({
            mensagem: "Erro: Requisição não cadastrada com sucesso!"
        })
    }
})

// Criar a rota cadastrar
router.post("/users", async (req, res) => {


    //Receber os dados no corpo da requisição
    var dados = req.body;
    console.log(dados);

    //Salvar no banco de dados
    await db.Requisicao.create(dados).then((dadosUsuario) => {
        //Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Requisição cadastrada com sucesso!",
            dadosUsuario
        });
    }).catch(() => {
        //Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Requisição não cadastrada com sucesso!"
        });
    })

});


//Exportar a instrução que está dentro da constante router
module.exports = router;