import React from 'react';

import { useAuth } from '../../hooks/Auth/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
