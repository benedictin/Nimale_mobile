import { StatusBar } from 'expo-status-bar';
import Navigation from './components/Navigation';
//import { Provider } from 'react-redux';
//import { store } from './redux/store';
import { AuthProvider } from './context/AuthContext';
export default function App() {
  return (
    <>
      
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </>
    
  );
}

