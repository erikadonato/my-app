import { useEffect, useState } from 'react';
import api from '../../service/api'
import { Container } from '../Container/styles';
import { Table, Tbody, Td, Th, Tr, Thead} from './styles'
import moment from 'moment'

const ListPassword = () => {

    const [data, setData ] = useState([])
    const [password, setPassword] = useState('******')

    console.log(data)
    useEffect(() => {
        api.get('/list-password').then(response => setData(response.data.results))
    }, [])

    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Usuário</Th>
                        <Th>Senha</Th>
                        <Th>Aplicação</Th>
                        <Th>Criado em</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.length > 0 && data.map((item, index) => {
                        return (
                            <Tr key={index}>
                                <Td>{item.id}</Td>
                                <Td>{item.usersname}</Td>
                                <Td>{item.password}</Td>
                                <Td>{item.aplicação}</Td>
                                <Td>{moment(item.created_at).format('DD/MM/YYYY h:mm:ss')}</Td>
                            </Tr>
                            )
                        })}
                </Tbody>
            </Table>    
        </Container>
    )
}

export default ListPassword; 