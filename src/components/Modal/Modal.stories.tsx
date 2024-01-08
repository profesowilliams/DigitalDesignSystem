import React, { useState } from 'react';
import { Modal, Button } from '../index';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {},
};

interface ModalProps {
  show: boolean;
  title: string;
  footer: string;
}

const Template: React.FC<ModalProps> = (args) => {
  const [show, setShow] = useState<boolean>(args.show);
  const onClose = () => setShow(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Open modal</Button>

      <Modal {...args} show={show} onHide={onClose} onCancel={onClose} onSave={onClose}>
        <div style={{ height: 200 }}>
          Modal Body
        </div>
      </Modal>
    </>
  );
};

export const _Modal = Template.bind({});
_Modal.args = {
  show: true,
  title: 'Modal title',
  footer: '',
};
