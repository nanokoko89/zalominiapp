import React from 'react';
import { Page, Header, Text } from 'zmp-ui';

const HomePage: React.FC = () => {
  return (
    <Page className="p-4">
      <Header title="Home" />
      <Text>Trang ví dụ.</Text>
    </Page>
  );
};

export default HomePage;
