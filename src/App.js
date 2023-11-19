import Routing from './Routes';

import { AddressProvider } from './context/Address';
import { AuthProvider } from './context/Auth';
import { BillingProvider } from './context/Billing';
import { EmployeeProvider } from './context/Employee';
import { GymMemberProvider } from './context/GymMember';
import { MainProvider } from './context/Main';
import { PersonProvider } from './context/Person';
import { TypeProvider } from './context/Type';
import { PaymentProvider } from './context/Payment';
import { ExerciseProvider } from './context/Exercise';
import { WorkoutRoutineProvider } from './context/WorkoutRoutine';

function App() {
  return (

    <AuthProvider>
      <MainProvider>
        <AddressProvider>
          <PersonProvider>
            <GymMemberProvider>
              <BillingProvider>
                <PaymentProvider>
                  <TypeProvider>
                    <ExerciseProvider>
                      <WorkoutRoutineProvider>
                        <EmployeeProvider>
                          <Routing />
                        </EmployeeProvider>
                      </WorkoutRoutineProvider>
                    </ExerciseProvider>
                  </TypeProvider>
                </PaymentProvider>
              </BillingProvider>
            </GymMemberProvider>
          </PersonProvider>
        </AddressProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;