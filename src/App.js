import Routing from './Routes';

import { AuthProvider } from './context/AuthProvider';
import { EmployeeProvider } from './context/EmployeeProvider';
import { MainProvider } from './context/MainProvider';

function App() {
  return (

    <AuthProvider>
      <MainProvider>
        <EmployeeProvider>
          <Routing />
        </EmployeeProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;