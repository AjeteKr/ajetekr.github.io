import { Routes, Route } from 'react-router-dom';
import './App.css';
import ComplexNavbar from './view/navbar/ComplexNavbar.jsx';
import MainContainer from './view/core/MainContainer.jsx';
import BlazorBankManagementPage from './view/projectpages/BlazorBankManagementPage.jsx';
import LakeXplorerPage from './view/projectpages/LakeXplorerPage.jsx';
import ToDoList from './view/projectpages/ToDoList.jsx'
import TicTacToePage from './view/projectpages/TicTacToePage.jsx';
import AboutMePage from './view/pages/AboutMePage.jsx';
import GwenStemPage from './view/projectpages/GwenStemPage.jsx';
import ProjectsPage from './view/pages/ProjectsPage.jsx';
import ContactPage from './view/pages/ContactPage.jsx';

function App() {

  return (
    <>
      <ComplexNavbar />
        <Routes>
          <Route exact path='/' element={<MainContainer />} />
          <Route exact path="/projects/bankmanagement" element={<BlazorBankManagementPage />} />
          <Route exact path="/projects/lakexplorer" element={<LakeXplorerPage />} />
          <Route exact path="/projects/todolist" element={<ToDoList />} />
          <Route exact path='/projects/tictactoe' element={<TicTacToePage/>}/>
          <Route exact path="/aboutme" element={<AboutMePage />} />
          <Route exact path="/projects/gwenstem" element={<GwenStemPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
    </>
  );
}

export default App;
