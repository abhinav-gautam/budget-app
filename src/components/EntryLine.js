import { Fragment, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { setEntry } from '../redux/entrySlice';


const EntryLine = ({ description, amount, isExpense = false, id, setIsOpen }) => {
    const { entries } = useSelector(state => state.entries)

    const dispatch = useDispatch()

    // Function to set entry to pre-populate modal when open
    const editEntry = (id) => {
        if (id) {
            const entry = entries.find(entry => entry.id === id)
            setIsOpen(true)
            dispatch(setEntry({ ...entry }))
        }
    }

    return (
        <Fragment>
            <Segment color={isExpense ? "red" : "green"}>
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{amount}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" bordered onClick={() => editEntry(id)} />
                            <Icon name="trash" bordered onClick={() => dispatch({ type: "entries/deleteEntries", payload: id })} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Fragment>
    );
}

export default EntryLine;
