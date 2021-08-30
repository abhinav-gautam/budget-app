import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({ isOpen, reset }) => {

    const { entry } = useSelector(state => state.entry)

    const dispatch = useDispatch()

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <EntryForm />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => { reset() }}>Close</Button>
                <Button onClick={() => { dispatch({ type: "entries/editEntry", payload: entry }); reset() }} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;
