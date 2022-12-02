import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {InfoHeader, Navigation, StartingBlock} from "./components";
import {OurFaimos, Call, Reviews, OurTeam, Examples} from "./blocks";
import {Services} from "./blocks/services";
import {AdminLogin} from "./admin-login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={(
                    <div>
                        <InfoHeader/>
                        <Navigation/>
                        <StartingBlock/>
                        <OurFaimos/>
                        <Call/>
                        <Reviews/>
                        <OurTeam/>
                        <Examples/>
                        <Services/>
                    </div>
                )}/>
                <Route path="/admin" element={<AdminLogin/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
