import Modal from 'react-modal';
import { ModalContainer, ButtonSpace } from './styles'
import { Typography } from '../Typography/styles'
import Button from '../Button';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      
    },
  };

  
  const ModalDeletarDado =({aplicacao, id, modalIsOpen, setModalIsOpen, handleDelete}) => {
    
    function closeModal() {
        setModalIsOpen(false);
    }

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
            <Typography color="#000" variant='h6'>
                Deseja excluir as credenciais de {aplicacao} ?
            </Typography>
            <ButtonSpace>
                <Button onClick={() => {
                    handleDelete(id, aplicacao)
                    setModalIsOpen(false)
                }}>Sim</Button>
            </ButtonSpace>
        </ModalContainer>
        </Modal>

  );
}

export default ModalDeletarDado;
