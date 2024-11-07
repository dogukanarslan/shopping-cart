import { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

import { useProductsContext } from '../contexts/ProductsContext';

const EditProductModal = (props) => {
  const { product, isOpen, onOpenChange } = props;

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const { setProducts } = useProductsContext();

  const handleEdit = () => {
    const newProduct = { ...product, price, name };
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? newProduct : p))
    );
    onOpenChange();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit Product
            </ModalHeader>
            <ModalBody>
              <Input
                label="Name"
                placeholder="Enter your product name"
                variant="bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Price"
                placeholder="Enter your product price"
                variant="bordered"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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

export default EditProductModal;
