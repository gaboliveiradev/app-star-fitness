import Routing from './Routes';

import { AddressProvider } from './context/Address';
import { AuthProvider } from './context/Auth';
import { BillingProvider } from './context/Billing';
import { EmployeeProvider } from './context/Employee';
import { GymMemberProvider } from './context/GymMember';
import { MainProvider } from './context/Main';
import { PersonProvider } from './context/Person';

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