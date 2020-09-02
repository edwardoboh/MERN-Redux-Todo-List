import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


function AddItemModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.addItem({ name: name });
    setShow(!show);
  };

  function getAddItemModal() {
    return (
     <>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => setShow(!show)}
        >
          Add Item
        </Button>

        <Modal
          isOpen={show}
          toggle={() => setShow(!show)}
        >
          <ModalHeader toggle={() => setShow(!show)}>
            Add an item
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => handleOnSubmit(e)}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add an item"
                  onChange={(e) => handleNameChange(e)}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }

  return getAddItemModal();
}

const mapStateToProps = state => ({
  item: state.item
});

const mapDispatchToProps = {
  addItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItemModal);
