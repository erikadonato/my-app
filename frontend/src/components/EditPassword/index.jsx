import api from '../../service/api';
import { useState, useEffect } from 'react';
import { Container } from '../Container/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, Tbody, Td, Th, Tr, Thead} from './styles'
import { AiOutlineEdit } from 'react-icons/ai'
import moment from 'moment'
import ModalEditarDados from './Modal';

const EditPassword = () => {

    const [data, setData ] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [username, setUsername] = useState()
    const [aplicacao, setAplicacao] = useState()
    const [password, setPassword] = useState()
    const [id, setId] = useState()


    function listAll(){
        api.get('/list-password').then(response => setData(response.data.results))
    }
    
    useEffect(() => {
        listAll()
    }, [data])

    function handleEditPassword(username, password, aplicacao, id){
        api.put('/edit-password', {
            aplicacao: aplicacao,
            username: username, 
            password: password,
            id: id
        }).then(toast.success(`As credencias de ${aplicacao} foram editadas com sucesso`))
    }

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
                        <Th>Editar</Th>
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
                                <Td>
                                    <AiOutlineEdit  style={{cursor: 'pointer'}}
                                        onClick={() => {
                                            setAplicacao(item.aplicacao)
                                            setModalIsOpen(true)
                                            setId(item.id)}} />
                                </Td>
                            </Tr>
                            )
                        })}
                </Tbody>
                </Table>
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <ModalEditarDados 
                setId={setId} setUsername={setUsername} setAplicacao={setAplicacao} 
                setPassword={setPassword} id={id} aplicacao={aplicacao} 
                username={username} password={password} modalIsOpen={modalIsOpen} 
                setModalIsOpen={setModalIsOpen} handleEditPassword={handleEditPassword}
            />
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> 
        </Container>
    )
}

export default EditPassword; 