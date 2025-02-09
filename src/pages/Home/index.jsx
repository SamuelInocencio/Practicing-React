import  Button  from "../../components/Button"
import MainTitle from "../../components/Title"
import TopBackground from "../../components/TopBackground"
import { Container, ContainerInputs, Form, Input, InputLabel } from "./styles"

function Home() {

  return (
    <Container>
      <TopBackground />
      <Form>
        <MainTitle>Cadastrar Usuários</MainTitle>
        <ContainerInputs>
          <div>
            <InputLabel>Nome <span> *</span></ InputLabel>
            <Input />

            <InputLabel>Idade <span> *</span></InputLabel>
            <Input />
          </div>
        </ContainerInputs>
        <div style={{width: "100%"}}>
          <InputLabel>Email <span> *</span></InputLabel>
          <Input />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
      <Button>Ver Lista de Usuários</Button>
    </Container>
  )
}

export default Home
