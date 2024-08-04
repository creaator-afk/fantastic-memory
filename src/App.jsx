// `src/App.jsx`
import './App.css';
import './styles/sidebar.css';
import Footer from './components/common/Footer.jsx';
import UserProfilePage from './pages/UserProfilePage.jsx';
import {Route, Routes} from 'react-router-dom';
import RestaurantPage from './pages/RestaurantPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Header from './components/common/Header.jsx';
import PersonalSettingsPage from './pages/PersonalSettingsPage.jsx';
import PrivacySettingsPage from './pages/PrivacySettingsPage.jsx';
import OtherSettingsPage from './pages/OtherSettingsPage.jsx';
import ProfileEditPage from "./pages/ProfileEditPage.jsx";
import AboutPage from './pages/AboutPage.jsx';
import SocialPage from './pages/SocialPage.jsx';
import PreferencesPage from './pages/PreferencesPage.jsx';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <Routes>
                        <Route exact path="/" Component={HomePage}/>
                        <Route path="/dashboard" Component={DashboardPage}/>
                        <Route path="/login" Component={LoginPage}/>
                        <Route path="/register" Component={RegisterPage}/>
                        <Route path="/restaurants" Component={RestaurantPage}/>
                        <Route path="/profile" Component={UserProfilePage}/>
                        <Route path="/settings/personal" Component={PersonalSettingsPage}/>
                        <Route path="/settings/privacy" Component={PrivacySettingsPage}/>
                        <Route path="/settings/other" Component={OtherSettingsPage}/>
                        <Route path="/profile/edit" Component={ProfileEditPage}/>
                        <Route path="/about" Component={AboutPage} />
                        <Route path="/social" Component={SocialPage} />
                        <Route path="/settings/preferences" Component={PreferencesPage} />
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;