import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useHistory } from 'react-router-dom';

import { useReceiptsContext } from '../contexts/ReceiptsContext';

const DeleteReceiptModal = (props) => {
  const { receipt, isOpen, onOpenChange } = props;

  const { setReceipts } = useReceiptsContext();

  const history = useHistory();

  const handleDelete = () => {
    setReceipts((prev) => prev.filter((p) => p.id !== receipt.id));
    history.push('/receipts');
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Delete Receipt
            </ModalHeader>
            <ModalBody>
              <p>Receipt will be permenantly deleted. Are you sure?</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button onPress={handleDelete} color="danger" variant="flat">
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteReceiptModal;
