import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BallanceButtons = props => (
    <div>
        <Button.Group>
            <Button animated='vertical' positive onClick={props.onClick('income')}>
                <Button.Content hidden>Income</Button.Content>
                <Button.Content visible>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Icon name='plus' />
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                </Button.Content>
            </Button>
            <Button.Or />
            <Button animated='vertical' negative onClick={props.onClick('expense')}>
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
