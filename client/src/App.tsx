import React from 'react';

import EmployeesListView from './employees/views/EmployeesListView';

import Layout from './common/containers/Layout/Layout';

function App() {
  return (
    <Layout>
      <EmployeesListView />
    </Layout>
  );
}

export default App;
