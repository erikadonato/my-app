import { Container } from "../../components/Container/styles"
import { Typography } from '../../components/Typography/styles'
import Button from "../../components/Button"
import { OptionsSpace } from './styles'
import { Link } from "react-router-dom"
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const HomePage = () => {
    return (
        <Container>
            <OptionsSpace>
                <Typography variant="h5">
                    Selecione o que deseja: 
                </Typography>
                <StyledLink to="/list-password">
                    <Button>
                        <Typography>
                            Suas Senhas
                        </Typography>
                    </Button>
                </StyledLink>

                <StyledLink to="/add-password">
                    <Button>
                        <Typography>
                            Adicionar Senhas
                        </Typography>
                    </Button>
                </StyledLink>

                <StyledLink to="/delete-password">
                    <Button>
                        <Typography>
                            Deletar Senhas
                        </Typography>
                    </Button>
                </StyledLink>

                <StyledLink to="/edit-password">
                    <Button>
                        <Typography>
                            Atualizar Senhas
                        </Typography>
                    </Button>
                </StyledLink>

            </OptionsSpace>
        </Container>
    )
}

export default HomePage