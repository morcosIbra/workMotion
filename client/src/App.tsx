import React from 'react';

import EmployeesListView from './employees/views/EmployeesListView/EmployeesListView';

import Layout from './common/container/Layout/Layout';

function App() {
  return (
    <Layout>
      <EmployeesListView />
    </Layout>
  );
}

export default App;
