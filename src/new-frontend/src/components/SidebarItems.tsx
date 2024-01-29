import React from 'react';

import { Flex, Icon, Text } from '@chakra-ui/react';
import { FiBriefcase, FiHome, FiLogOut, FiUser, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const items = [
    { icon: FiHome, title: 'Dashboard', path: "/" },
    { icon: FiUser, title: 'Profile', path: "/profile" },
    { icon: FiBriefcase, title: 'Items', path: "/items" },
    { icon: FiUsers, title: 'Admin', path: "/admin" },
    { icon: FiLogOut, title: 'Log out' }
];

const SidebarItems: React.FC = () => {
    const listItems = items.map((item) => (
        <Flex w="100%" p={2} key={item.title} _hover={{
            background: "gray.200",
            borderRadius: "12px",
        }}>
            <Link to={item.path || "/"}>
                <Flex color="teal.500">
                    <Icon as={item.icon} alignSelf="center" />
                    <Text ml={4}>{item.title}</Text>
                </Flex>
            </Link>
        </Flex>
    ));

    return (
        <>
            {listItems}
        </>
    );
};

export default SidebarItems;
