 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Modals({show, handleClose, content}) {



  return(
<>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>⛑️🗺️🫀</Modal.Title>
        </Modal.Header>
        <Modal.Body> {content} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         {/*  <Button variant="primary" onClick={handleClose}>
            Save Changes 
          </Button>*/}
        </Modal.Footer>
      </Modal>


    </>
  )
}


export default Modals; 