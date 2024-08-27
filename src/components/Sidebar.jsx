import { FiFile, FiPlusSquare, FiDisc } from 'react-icons/fi';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkItems = [
  { name: 'CreateReceipt', icon: FiPlusSquare, url: '/receipts/create' },
  { name: 'Receipts', icon: FiFile, url: '/receipts' },
  { name: 'Products', icon: FiDisc, url: '/products' },
];

const Sidebar = () => {
  return (
    <Box
      bg="whiteAlpha.600"
      borderRight="1px"
      borderRightColor="whiteAlpha.600"
      w="60"
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Receipts
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <Box
          key={link.name}
          as={Link}
          to={link.url}
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            cursor="pointer"
            _hover={{
              bg: 'gray.200',
            }}
          >
            <Icon as={link.icon} mr="4" fontSize="16" /> {link.name}
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
