import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import App from './App';
import { AuthProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
    <App />
</AuthProvider>

);
