
'use client'
import { useState, React, } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import './page.css'

export default function Home() {

  //Declarar uma nova variável dados com state e atribuir o objeto
  const [data, setData] = useState({
    veiculo: '',
    funcionario: '',
    data: '',
    tipo: '',
    valor: ''
  })

  // Declara a variavel para receber mensagem
  const [message, setMessage] = useState("");

  //Receber os dados dos campos do formulário
  const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value});

  // Executar a função quando o usuário clicar no botão do formulário
  const addUser = async (e) => {
    
    //Bloquear o recarregamento da página
    e.preventDefault();

    // Criar a constante com os dados do cabeçalho
    const headers = {
      'headers': {
        //Indicar que será enviado os dados em formato de objeto
        'Content-Type': 'application/json'
      }
    }
    
    //Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
    await axios.post('http://localhost:8080/users', data, headers)
      .then((response) => {
        console.log(response.data.mensagem);

        //Atribuir a mensagem no state message
        setMessage(response.data.mensagem);


        //Limpar os dados do state e os dados dos campos do formulaio
        setData({
          veiculo: '',
          funcionario: '',
          data: '',
          tipo: '',
          valor: ''
        })
      }).catch((err) => {

        
        if (err.response) {
          setMessage(err.response.data.mensagem)
        }else {
          setMessage("Erro: Tente novamente mais tarde ou entre em contato com o seu Desenvolvedor !")
        }
      });
  }

  return(
    <main >
      <h1>Ficha de Abastecimento</h1>

      {message ? <p className='informativo'>{message}</p> : ""}
       
       <form onSubmit={addUser}>

         <fieldset>

           <legend><b>Dados do Veículo</b></legend>
           <label>Placa:</label>
           <input type='text' name='veiculo' onChange={valueInput} value={data.veiculo} />
         </fieldset>

         <fieldset>

           <legend><b>Funcionário</b></legend>
           <label>Nome:</label>
           <input type='text' name='funcionario'  onChange={valueInput} value={data.funcionario} />
         </fieldset>

         <fieldset>

           <legend><b>Período</b></legend>
           <label>Data:</label>
           <input type='date' name='data' className='datas'  onChange={valueInput} value={data.data}/>
         </fieldset>

         <fieldset className='tipo'>

           <legend><b>Tipo de Requisição</b></legend>
           <label>Empresa ou Particular ?</label>
           <input type='text' name='tipo' onChange={valueInput} value={data.tipo}/>
      
         </fieldset>


         <fieldset>

           <legend><b>Valor</b></legend>

           <input
            type="number"
            name='valor'
            onChange={valueInput} value={data.valor}
            />
         </fieldset>

         <button type='submit'>Enviar</button>
      </form>
      
  
    
    </main>
  )
}
