import Modal from 'react-modal';
import { useState } from 'react'; 
import { ModalContainer, ButtonSpace, FormSpace, InputSpace } from './styles'
import TextField from '../TextField/'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '../Button';
import { Typography } from '../Typography/styles';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      backgroundColor: 'rgba(79, 79, 79, 0.8)'
    },
  };

  const ModalEditarDados =({aplicacao, username, password, 
    id, modalIsOpen, setModalIsOpen, 
    handleEditPassword, setUsername, setPassword, setAplicacao}) => {
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function closeModal() {
        setModalIsOpen(false);
    }

    const handleClickShowPassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <span
        style={{cursor: 'pointer', float: 'right'}} 
        onClick={() => setModalIsOpen(false)}>X</span>
        <br /><br />
        <ModalContainer>
        <Typography variant='h5'>
            Editar dados de credencial
        </Typography>
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

                </InputSpace>
            </FormSpace>
            <ButtonSpace>
                <Button onClick={() => {
                    handleEditPassword(username, password, aplicacao, id)
                    setModalIsOpen(false)
                }}>Alterar</Button>
            </ButtonSpace>
        </ModalContainer>
        </Modal>

  );
}

export default ModalEditarDados;
