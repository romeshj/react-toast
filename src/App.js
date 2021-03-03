import './App.scss';
import Toast from './components/toast/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
<i class="fas fa-exclamation-triangle"></i>

const successIcon = <FontAwesomeIcon icon={faCheckCircle} style={{ width: '30px', height: '30px' }} />
const warningIcon = <FontAwesomeIcon icon={faExclamationTriangle} style={{ width: '30px', height: '30px' }} />

const App = () => {

  const successToast = {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    type: 'success',
    icon: successIcon
  }

  const warningToast = {
    id: 1,
    title: 'Warning',
    description: 'This is a warning toast component',
    type: 'warning',
    icon: warningIcon
  }

  return (
    <div className="app">
      <Toast toastConfig={successToast} position="bottom-right" />
      <Toast toastConfig={warningToast} position="bottom-left" />
    </div>
  );
}

export default App;
