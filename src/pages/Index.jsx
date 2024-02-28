import React from "react";
import { Box, Container, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, useColorModeValue } from "@chakra-ui/react";
import { FaTaxi } from "react-icons/fa";

const DashboardStatistic = ({ label, value, icon }) => {
  return (
    <Stat p={5} shadow="md" border="1px solid" borderColor={useColorModeValue("gray.200", "gray.700")} rounded="md">
      {icon}
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>Updated now</StatHelpText>
    </Stat>
  );
};

const Index = () => {
  // TODO: Fetch data from Autocab API and pass as props to DashboardStatistic components

  return (
    <Container maxW="container.xl" py={5}>
      <Heading as="h1" mb={5}>
        Taxi Management Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {/* Example static data, replace with actual data from API */}
        <DashboardStatistic label="Total Rides" value="1234" icon={<FaTaxi size="2em" />} />
        <DashboardStatistic label="Active Drivers" value="56" icon={<FaTaxi size="2em" />} />
        <DashboardStatistic label="Earnings" value="$10,000" icon={<FaTaxi size="2em" />} />
        {/* Add more statistics as needed */}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
