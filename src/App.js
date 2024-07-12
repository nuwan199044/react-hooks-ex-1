import logo from './logo.svg';
import './App.css';
import FocusInput from './component/FocusInput';
import ClassTime from './component/ClassTime';
import HookTimer from './component/HookTimer';

function App() {
  return (
    <div className="App">
      <ClassTime />
      <HookTimer />
    </div>
  );
}

export default App;
