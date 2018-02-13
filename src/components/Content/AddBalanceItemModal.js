import React from 'react'
import { Button, Icon, Header, Modal } from 'semantic-ui-react'

const AddBalanceItemModal = (props) => (
    <Modal open={props.open} onClose={props.onClose} basic size='small'>
        <Header icon='archive' content={`Add ${props.type}`} />
        <Modal.Content>
            <p>Fill form below</p>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red' inverted>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' inverted>
                <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
    </Modal>
);

export default AddBalanceItemModal;
