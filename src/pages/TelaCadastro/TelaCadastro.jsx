import Corpo from '../../components/Corpo/Corpo'
import { StyledLogin } from "./styled"
import { useState } from "react";
import axios from "axios"

import { useNavigate } from "react-router-dom";




function TelaCadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState()
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  function cadastrarUsuario(e) {
    e.preventDefault()

    const body = {
      nome: nome,
      email: email,
      telefone: Number(telefone),
      senha: senha
    }
    const url = `${import.meta.env.VITE_API_BASE_URL}/sign-up`;

    const promise = axios.post(url, body);

    promise.then(res => {
      navigate("/login"),
        console.log(res.data)
      alert(res.data)
    })

    promise.catch(err => { alert(err.response.data); })

  }

  return (
    <>
      <Corpo />
      <StyledLogin>
        <form onSubmit={cadastrarUsuario}>

          <div className="inputBox">
            <input type="text" name="nome" id="nome" className="inputUser" required
              value={nome} onChange={e => setNome(e.target.value)} />
            <label htmlFor="nome" className="labelInput">Nome completo</label>
          </div>

          <div className="inputBox">
            <input type="text" name="email" id="email" className="inputUser" required
              value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="email" className="labelInput">Email</label>
          </div>

          <div className="inputBox">
            <input type="tel" name="telefone" id="telefone" className="inputUser" required
              value={telefone} onChange={e => setTelefone(e.target.value)} />
            <label htmlFor="telefone" className="labelInput">Telefone</label>
          </div>

          <div className="inputBox">
            <input type="tel" name="senha" id="senha" className="inputUser" required
              value={senha} onChange={e => setSenha(e.target.value)} />
            <label htmlFor="senha" className="labelInput">Senha</label>
          </div>

          <button type="submit" name="submit" id="submit">Cadastrar</button>
        </form>
      </StyledLogin>

    </>

  );
}

export default TelaCadastro;