import { useContext, useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

import { ReceiptsContext } from '../contexts/ReceiptsContext';

const EditReceiptModal = (props) => {
  const { receipt, isOpen, onOpenChange } = props;

  const [name, setName] = useState(receipt.name);

  const { setReceipts } = useContext(ReceiptsContext);

  const handleEdit = () => {
    const newReceipt = { ...receipt, name };
    setReceipts((prev) =>
      prev.map((p) => (p.id === receipt.id ? newReceipt : p))
    );
    onOpenChange();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit Receipt
            </ModalHeader>
            <ModalBody>
              <Input
                label="Name"
                placeholder="Enter your receipt name"
                variant="bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button onPress={handleEdit}>Edit</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditReceiptModal;
