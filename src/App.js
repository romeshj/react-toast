import './App.scss';
import Toast from './components/toast/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const successIcon = <FontAwesomeIcon icon={faCheckCircle} style={{ width: '30px', height: '30px' }} />
const warningIcon = <FontAwesomeIcon icon={faExclamationTriangle} style={{ width: '30px', height: '30px' }} />
const errorIcon = <FontAwesomeIcon icon={faExclamationCircle} style={{ width: '30px', height: '30px' }} />
const infoIcon = <FontAwesomeIcon icon={faInfoCircle} style={{ width: '30px', height: '30px' }} />

const App = () => {

  const successToast = {
    title: 'Success',
    description: 'This is a success toast component',
    type: 'success',
    icon: successIcon,
    show: true,
  }

  const warningToast = {
    title: 'Warning',
    description: 'This is a warning toast component',
    type: 'warning',
    icon: warningIcon,
    show: true,
  }

  const errorToast = {
    title: 'Error',
    description: 'This is a error toast component',
    type: 'error',
    icon: errorIcon,
    show: true,
  }

  const infoToast = {
    title: 'Info',
    description: 'This is a info toast component',
    type: 'info',
    icon: infoIcon,
    show: true,
  }

  return (
    <div className="app">
      <Toast toastConfig={successToast} position="bottom-right" />
      <Toast toastConfig={warningToast} position="bottom-left" />
      <Toast toastConfig={errorToast} position="top-left" />
      <Toast toastConfig={infoToast} position="top-right" />
    </div>
  );
}

export default App;
