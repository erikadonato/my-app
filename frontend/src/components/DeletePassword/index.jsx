import api from '../../service/api';
import { useState, useEffect } from 'react';
import { Container } from '../Container/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, Tbody, Td, Th, Tr, Thead} from './styles'
import { BsTrash } from 'react-icons/bs'
import moment from 'moment'
import ModalDeletarDado from './Modal';

const DeletePassword = () => {

    const [data, setData ] = useState([])
    const [apagar, setApagar ] = useState()
    const [id_Apagar, setId_Apagar] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function listAll(){
        api.get('/list-password').then(response => setData(response.data.results))
    }
    
    useEffect(() => {
        listAll()
    }, [data])

    function handleDelete(id, aplicacao) {
        api.delete(`/delete-password/${id}`).then(toast.success(`As credencias de ${aplicacao} foram deletadas com sucesso`))
        listAll()
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
                        <Th>Apagar</Th>
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
                                    <BsTrash  style={{cursor: 'pointer'}}
                                        onClick={() => {
                                            setModalIsOpen(true)
                                            setApagar(item.aplicação)
                                            setId_Apagar(item.id)}} />
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
            <ModalDeletarDado aplicacao={apagar} id={id_Apagar} 
                modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}
                handleDelete={handleDelete}
            />
        </Container>
    )
}

export default DeletePassword; 