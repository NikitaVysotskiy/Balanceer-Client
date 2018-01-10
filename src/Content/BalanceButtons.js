import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BallanceButtons = () => (
    <div>
        <Button.Group>
            <Button animated='vertical' positive>
                <Button.Content hidden>Income</Button.Content>
                <Button.Content visible>
                    <Icon name='plus' />
                </Button.Content>
            </Button>
            <Button.Or />
            <Button animated='vertical' negative>
                <Button.Content hidden>Expense</Button.Content>
                <Button.Content visible>
                    <Icon name='minus square' />
                </Button.Content>
            </Button>
        </Button.Group>
    </div>
);

export default BallanceButtons
