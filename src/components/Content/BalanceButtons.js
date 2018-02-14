import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { EXPENSE, INCOME } from "../../constants/constants";

const BallanceButtons = props => (
    <div>
        <Button.Group>
            <Button animated='vertical' positive onClick={props.onClick(INCOME, props.currency)}>
                <Button.Content hidden>Income</Button.Content>
                <Button.Content visible>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Icon name='plus' />
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                </Button.Content>
            </Button>
            <Button.Or />
            <Button animated='vertical' negative onClick={props.onClick(EXPENSE, props.currency)}>
                <Button.Content hidden>Expense</Button.Content>
                <Button.Content visible>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Icon name='minus square' />
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                </Button.Content>
            </Button>
        </Button.Group>
    </div>
);

export default BallanceButtons
