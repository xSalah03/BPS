import './App.css';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './features/apiSlice';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/Data';
import CreateProduct from './components/CreateProduct';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import DeleteProduct from './components/DeleteProduct';

function App() {
  return (
    <Provider store={store} >
      <ApiProvider api={productsApi}>
        <div className="App">
          <Routes>
            <Route path='/' element={<Appbar />} >
              <Route path='data' element={<Data />} />
              <Route path='create' element={<CreateProduct />} />
              <Route path='delete' element={<DeleteProduct />} />
              <Route index element={<Data />} />
            </Route>
          </Routes>
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
