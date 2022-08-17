import { Route, Routes } from 'react-router-dom';

import App from './../App';
import SinglePage from './SinglePage';

const Routing = () => {
    return ( 
        <Routes>
        <Route path='/:dataId' element={<SinglePage />} />
        <Route path='/' element={<App />} />
        </Routes>
     );
}
 
export default Routing;