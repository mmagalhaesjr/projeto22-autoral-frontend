import Corpo from '../../components/Corpo/Corpo';

import { StyledLogin } from "./styled";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext'

import axios from "axios";




function TelaLogin() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { token, setToken } = useContext(UserContext)
  const navigate = useNavigate()

  function logar(e) {
    e.preventDefault();

    const body = {
      email: email,
      senha: senha
    };

    const url = `${import.meta.env.VITE_API_BASE_URL}/sign-in`;
    const promise = axios.post(url, body);

    promise.then((res) => {
      navigate('/');
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)

    });

    promise.catch(err => {
      alert(err.response.data);
    });
  }

  return (
    <>
      <Corpo />
      <StyledLogin>
        <form onSubmit={logar}>
          <div className="inputBox">
            <input type="text" name="email" id="email" className="inputUser" required
              value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="email" className="labelInput">Email</label>
          </div>

          <div className="inputBox">
            <input type="password" name="senha" id="senha" className="inputUser" required
              value={senha} onChange={e => setSenha(e.target.value)} />
            <label htmlFor="senha" className="labelInput">Senha</label>
          </div>

          <button type="submit" name="submit" id="submit">Entrar</button>

          <br /><br />
        </form>
        <Link to="/cadastro">Cadastre-se</Link>
      </StyledLogin>

    </>

  );
}

export default TelaLogin;