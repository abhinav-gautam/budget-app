import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { resetEntry } from '../redux/entrySlice';

const ButtonSaveOrCancel = () => {
    const { entry } = useSelector(state => state.entry)
    const dispatch = useDispatch()

    return (
        <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => { dispatch({ type: "entries/addEntry", payload: entry }); dispatch(resetEntry()) }}>Ok</Button>
        </Button.Group>
    );
}

export default ButtonSaveOrCancel;
