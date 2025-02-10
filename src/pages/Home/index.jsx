import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import api from '../../services/api'

import Button from "../../components/Button"
import MainTitle from "../../components/Title"
import TopBackground from "../../components/TopBackground"
import { Container, ContainerInputs, Form, Input, InputLabel } from "./styles"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const { data } = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
    navigate('/lista-de-usuarios')
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <MainTitle>Cadastrar Usuários</MainTitle>
        <ContainerInputs>
          <div>
            <InputLabel>Nome <span> *</span></ InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />

            <InputLabel>Idade <span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInputs>
        <div style={{ width: "100%" }}>
          <InputLabel>Email <span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>
      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
    </Container>
  )
}

export default Home
