import React, { useContext } from 'react'
import { Modal, Text } from '@shopify/polaris';
import popupContext from './providers/Popup'

export default function Popup() {
    const [isOpen,setActive] = useContext(popupContext)
    return (
        <>
            <Modal
                open={isOpen}
                titleHidden
                onClose={()=>setActive(!isOpen)}
            >
                <Modal.Section>
                    <Text>Thanks for your valuable feedback! 😊</Text>
                </Modal.Section>
            </Modal>
        </>
    );
}
