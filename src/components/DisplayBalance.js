import { Statistic } from 'semantic-ui-react';

const DisplayBalance = (props) => {
    const { color, title, value, size = "tiny" } = props
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: "center" }}>{title}:</Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    );
}

export default DisplayBalance;
