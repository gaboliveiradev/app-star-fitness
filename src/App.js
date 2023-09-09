import Routing from './Routes';

import { AuthProvider } from './context/AuthProvider';
import { MainProvider } from './context/MainProvider';

function App() {
  return (
    <MainProvider>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </MainProvider>
  );
}

export default App;