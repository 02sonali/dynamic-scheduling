import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import jobData from "../../data/job_data.json";

const AddJob = (props) => {
    const [selectedJob, setJob] = useState("0");

    const handleClose = () => props.closePopup(false);
    const handleSubmit = () => {
        props.closePopup(false);
    }
    const allOptions = jobData.map(job => <option key={job.type} value={job.type}>{job.type}</option>)
    return (
      <>
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        custom
                        onChange={e => setJob(e.currentTarget.value)}
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
            <Button variant="primary" onClick={handleSubmit} disabled={selectedJob === "0"}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default AddJob;