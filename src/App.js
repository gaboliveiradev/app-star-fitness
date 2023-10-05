import Routing from './Routes';
import { AddressProvider } from './context/AddressProvider';

import { AuthProvider } from './context/AuthProvider';
import { BillingProvider } from './context/BillingProvider';
import { EmployeeProvider } from './context/EmployeeProvider';
import { GymMemberProvider } from './context/GymMemberProvider';
import { MainProvider } from './context/MainProvider';
import { PersonProvider } from './context/PersonProvider';

function App() {
  return (

    <AuthProvider>
      <MainProvider>
        <AddressProvider>
          <PersonProvider>
            <GymMemberProvider>
              <BillingProvider>
                <EmployeeProvider>
                  <Routing />
                </EmployeeProvider>
              </BillingProvider>
            </GymMemberProvider>
          </PersonProvider>
        </AddressProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;