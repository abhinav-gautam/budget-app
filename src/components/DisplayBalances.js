import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance';

const DisplayBalances = (props) => {
    const { incomeTotal, expenseTotal } = props
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance color="green" title="Income" value={incomeTotal} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance color="red" title="Expenses" value={expenseTotal} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;
