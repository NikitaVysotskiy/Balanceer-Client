import React from 'react'
import { Button, Form, Icon, Header, Modal, Segment } from 'semantic-ui-react'


const BalanceItemForm = props => (
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input
                    fluid
                    icon='eur'
                    iconPosition='left'
                    placeholder='Amount'
                    value={props.amount}
                    onChange={props.changeAmount}
                />
                <Form.Input
                    fluid
                    placeholder='Source'
                    icon='credit card alternative'
                    value={props.source}
                    onChange={props.changeSource}
                />
                <Form.Input fluid placeholder='Date' />
            </Form.Group>
        </Form>
    </Segment>
);


const AddBalanceItemModal = props => (
    <Modal open={props.open} onClose={props.onClose} basic size='small'>
        <Header icon='write' content={`Add ${props.type}`} />
        <Modal.Content>
            <BalanceItemForm
                amount={props.amount}
                value={props.value}
                changeAmount={props.changeAmount}
                changeSource={props.changeSource}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button
                basic
                color='red'
                inverted
                onClick={props.onClose}
            >
                <Icon name='remove' /> Cancel
            </Button>
            <Button
                color='green'
                inverted
                onClick={props.submitForm}
            >
                <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
    </Modal>
);

export default AddBalanceItemModal;
