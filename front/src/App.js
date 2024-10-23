import { Routes, Route } from 'react-router-dom';
import './App.css';
import ComplexNavbar from './components/ComplexNavbar.jsx';
import * as Pages from './components/pages';
import MainContainer from './components/MainContainer.jsx';

function App() {

  return (
    <>
      <ComplexNavbar />
        <Routes>
          <Route exact path='/' element={<MainContainer />} />
          <Route exact path="/projects/bankmanagement" element={<Pages.BlazorBankManagementPage />} />
          <Route exact path="/projects/lakexplorer" element={<Pages.LakeXplorerPage />} />
          <Route exact path="/projects/todolist" element={<Pages.ToDoListPage />} />
          <Route exact path="/aboutme" element={<Pages.AboutMePage />} />
          <Route exact path="/projects/gwenstem" element={<Pages.GwenStemPage />} />
          <Route exact path="/technologies" element={<Pages.Technologies />} />
          <Route exact path="/projects" element={<Pages.ProjectsPage />} />
          <Route exact path="/contact" element={<Pages.ContactPage />} />
        </Routes>
    </>
  );
}

export default App;
