import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import machineData from "../../data/machine_data.json";

const AddMachine = (props) => {
    const [selectedMachine, setMachine] = useState("0");
    const mode = () => {
      let text;
      switch(props.mode) {
        case "inactivate":
          text = "Inactive Machine";
          break;
        case "remove":
          text = "Remove Machine";
          break;
        default:
          text = "Add Machine";
      }
      return text;
    }
    
    const handleClose = () => props.closePopup(false);
    const handleSubmit = () => {
        props.closePopup(false);
    }
    const allOptions = machineData.map(machine => <option key={machine.id} value={machine.id}>{machine.id}</option>)
    return (
      <>
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{mode()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Machine Type</Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        custom
                        onChange={e => setMachine(e.currentTarget.value)}
                    >
                        <option value="0">Select</option>
                        {allOptions}
                    </Form.Control>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={selectedMachine === "0"}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default AddMachine;