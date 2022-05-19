import api from '../../service/api';
import { useEffect, useState } from 'react';

import { Container } from '../Container/styles';
import { FormSpace, InputSpace } from './styles'

import TextField from '../TextField';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '../Button';


const AddPassword = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [ username, setUsername] = useState()
    const [ password, setPassword] = useState()
    const [ aplicacao, setAplicacao ] = useState()
    const [ clear, setClear ] = useState(false)

    const notifySuccess = (successMessage) => toast.success(successMessage);
  
    const handleClickShowPassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const clearAll = (message) => {
        notifySuccess(message)
        window.location.reload()
      }

      const handleAdd = (username, password, aplicacao) => {
          api.post('/add-password', {
              username: username, 
              password: password,
              aplicacao: aplicacao
          }).then(response => {
              clearAll(response.data.message)
            })
      }

    return (
        <Container>
            <FormSpace>
                <InputSpace>
                    <TextField
                    label="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={true}
                    />
                    <TextField
                    label="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={isPasswordVisible ? 'text' : 'password'}
                    required={true}
                    endIcon={
                        <IconButton
                        style={{color: "#FFF"}}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {isPasswordVisible? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    }
                    />
                </InputSpace>
                <InputSpace>
                    <TextField
                        label="Aplicação"
                        value={aplicacao}
                        onChange={(e) => setAplicacao(e.target.value)}
                        required={true}
                    />
                    <Button onClick={() => handleAdd(username, password, aplicacao)}>
                        Adicionar
                    </Button>
                </InputSpace>
            </FormSpace>
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

export default AddPassword; 