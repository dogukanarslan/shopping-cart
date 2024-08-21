import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FiFile, FiPlusSquare, FiDisc } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';

const LinkItems = [
  { name: 'CreateReceipt', icon: FiPlusSquare, url: '/receipts/create' },
  { name: 'Receipts', icon: FiFile, url: '/receipts' },
  { name: 'Products', icon: FiDisc, url: '/products' },
];

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="gray.100">
        <Box
          bg="whiteAlpha.600"
          borderRight="1px"
          borderRightColor="whiteAlpha.600"
          w="60"
          pos="fixed"
          h="full"
        >
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
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
                  bg: 'gray.400',
                  color: 'white',
                }}
              >
                <Icon as={link.icon} mr="4" fontSize="16" /> {link.name}
              </Flex>
            </Box>
          ))}
        </Box>
        <Box ml="60" p="5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/receipts/create">
              <CreateReceipt />
            </Route>
            <Route path="/receipts/:id">
              <ReceiptDetail />
            </Route>
            <Route path="/receipts">
              <Receipts />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
