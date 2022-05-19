import { Link } from 'react-router-dom'
import { Container } from './styles';
import { Tooltip } from '@mui/material';
import { AiOutlineUnorderedList, AiFillEdit, AiOutlineHome } from 'react-icons/ai'
import { BsFillTrash2Fill } from 'react-icons/bs'
import { FiRefreshCcw } from 'react-icons/fi'

const LinkList = ({setToogle, toogle}) => {
    return (
        <Container>
             <Link to="/home">
                <Tooltip title="Home">
                    <li onClick={() => setToogle(!toogle)}>
                        <AiOutlineHome className='fas' />
                        <span>Home</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/list-password">
                <Tooltip title="Suas senhas">
                    <li onClick={() => setToogle(!toogle)}> 
                        <AiOutlineUnorderedList className='fas' />
                        {/* <i class="fas fa-store"/>  */}
                        <span>Suas senhas</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/add-password">
                <Tooltip title="Adicionar Senhas">
                    <li onClick={() => setToogle(!toogle)}>
                        <AiFillEdit className='fas' />
                        <span>Adicionar Senhas</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/delete-password">
                <Tooltip title="Deletar senhas">
                    <li onClick={() => setToogle(!toogle)}>
                        <BsFillTrash2Fill className='fas' />
                        <span>Deletar senhas</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/edit-password">
                <Tooltip title="Atualizar senhas">
                    <li onClick={() => setToogle(!toogle)}>
                        <FiRefreshCcw className='fas' />
                        <span>Atualizar senhas</span>
                    </li>
                </Tooltip>
            </Link>
        </Container>
    )
}

export default LinkList;
