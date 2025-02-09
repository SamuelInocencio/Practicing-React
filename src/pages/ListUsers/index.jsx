import Button from "../../components/Button"
import { Title } from "../../components/Title/styles"
import TopBackground from "../../components/TopBackground"
import { AvatarUser, CardUsers, Container, ContainerUsers, TrashIcon } from "./styles"

function ListUsers() {
    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                <CardUsers>
                    <AvatarUser />
                    <div>

                    </div>
                    <TrashIcon />
                </CardUsers>
            </ContainerUsers>
            <Button>Voltar</Button>
        </Container>
    )
}

export default ListUsers