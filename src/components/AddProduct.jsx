import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'


const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [open,setOpen]=React.useState(false)

  const onOpen=()=>{
   setOpen(true);
  }

  const Close=()=>{
    setOpen(false)
  }


  return (
    <>
      <Button w="200px" margin="auto" my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal isOpen={open}>
        <ModalOverlay/>
        <ModalContent>
        <ModalHeader>Add New Product</ModalHeader>
        <ModalCloseButton onClick={Close}/>
        <ModalBody pb={6}>
          <h4><b>Title</b></h4>
          <Input data-cy="add-product-title" placeholder="Title" />
          <br /><br />
          <h4><b>Category</b></h4>
          <Select data-cy="add-product-category">
            <option value="">Category</option>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <br />
          <h4><b>Gender</b></h4>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male" value="male">Male  </Radio>
            
            <Radio data-cy="add-product-gender-female" value="female" >Female  </Radio>
            
            <Radio data-cy="add-product-gender-unisex" value="unisex">Unisex </Radio>
          </RadioGroup>
          <br />
          <h4><b>Price</b></h4>
          <Input data-cy="add-product-price" placeholder="Price"/>
        </ModalBody>
        <ModalFooter>
        <Button data-cy="add-product-submit-button" colorScheme='blue'>Create</Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Button>Open Modal</Button>

<Modal isOpen={true}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod soluta cupiditate sequi eius fugiat magni quibusdam perspiciatis cumque, sapiente porro odio sint dolore eum nihil ullam modi maxime incidunt.
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal> */}
    </>
  );
};

export default AddProduct;
