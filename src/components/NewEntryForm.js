import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from './EntryForm';

const NewEntryForm = () => {

    return (
        <Form unstackable>
            <EntryForm />
            <ButtonSaveOrCancel />
        </Form>
    );
}

export default NewEntryForm;
