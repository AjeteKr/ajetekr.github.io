import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import AboutMePage from '../pages/AboutMePage';
import Technologies from '../pages/Technologies';
import ContactPage from '../pages/ContactPage';

const MainContainer = () => {
    return (
        <>
            <HomePage /> 
            <ProjectsPage />
            <AboutMePage />
            <Technologies />
            <ContactPage />
        </>
    )
}

export default MainContainer;