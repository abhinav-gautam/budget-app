import { Header } from 'semantic-ui-react';

const MainHeader = (props) => {
    const { type, title } = props
    return (
        <Header as={type}>{title}</Header>
    );
}

export default MainHeader;
