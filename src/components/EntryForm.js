import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { setEntry } from '../redux/entrySlice';

const EntryForm = () => {
    const { entry } = useSelector(state => state.entry)
    const dispatch = useDispatch()

    const handleEntryChange = (event) => {
        const name = event.target.name
        const type = event.target.type
        const value = type === "checkbox" ? event.target.checked : event.target.value
        dispatch(setEntry({ [name]: value }))
    }

    return (
        <Fragment>
            <Form.Group>
                <Form.Input
                    placeholder="New Shinny Thing"
                    icon="tags" name="description"
                    width={12} label="Description"
                    value={entry.description} onChange={handleEntryChange} />
                <Form.Input
                    placeholder="100.00" name="amount"
                    icon="dollar" iconPosition="left"
                    width={12} label="Amount"
                    value={entry.amount} onChange={handleEntryChange} />
            </Form.Group>
            <Segment compact>
                <Form.Input
                    type="checkbox"
                    name="isExpense"
                    checked={entry.isExpense}
                    onChange={handleEntryChange}
                    label="Is Expense"
                />
            </Segment>
        </Fragment>
    );
}

export default EntryForm;
