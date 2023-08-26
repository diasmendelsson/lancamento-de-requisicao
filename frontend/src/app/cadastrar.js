
'use client'
import { useState, React } from 'react'
import axios from 'axios';
import './page.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Cadastrar() {

  return(
    <main >

      <Link href={"cadastrar"}><button type='button'>Voltar</button></Link>

      <h1>Listar Usuario</h1>

      {/*message ? <p className='informativo'>{message}</p> : ""*/} 
       
      
    </main>
  )
}
