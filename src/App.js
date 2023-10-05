import Routing from './Routes';

import { AuthProvider } from './context/AuthProvider';
import { EmployeeProvider } from './context/EmployeeProvider';
import { GymMemberProvider } from './context/GymMemberProvider';
import { MainProvider } from './context/MainProvider';

function App() {
  return (

    <AuthProvider>
      <MainProvider>
        <GymMemberProvider>
          <EmployeeProvider>
            <Routing />
          </EmployeeProvider>
        </GymMemberProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;