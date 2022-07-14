import React from 'react';
import Layout from './common/Container/Layout/Layout';
import EmployeesListView from './Employees/views/EmployeesListView/EmployeesListView';

function App() {
  return (
    <Layout>
      <EmployeesListView />
    </Layout>
  );
}

export default App;
