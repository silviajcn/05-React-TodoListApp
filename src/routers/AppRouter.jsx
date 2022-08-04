import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from '../00-todoApp/components';
import TodoApp from '../00-todoApp/TodoApp';
import { Home } from '../pages';
import { CounterApp, CounterWithCustomHook } from '../01-useState';
import { FormWithCustomHook, SimpleForm } from '../02-useEffect';
import { MultipleCutomHooks, SearchCharacter } from '../03-examples';
import FocusScreen from '../04-useRef/FocusScreen';
import Layout from '../05-useLayoutEffect/Layout';
import {Memorize, MemoHook, CallbackHook} from '../06-Memos';
import { Padre } from '../07-tarea-memo/Padre';

const AppRouter = () => {
    return (
        <>
            <Header />

            <Routes>

                <Route path='/' element={<TodoApp />} />

                <Route path='/hooks' element={<Home />} />

                <Route path='/counter' element={<CounterApp />} />

                <Route path='/counter-custom-hook' element={<CounterWithCustomHook />} />

                <Route path='/simple-form' element={<SimpleForm />} />

                <Route path='/form-custom-hook' element={<FormWithCustomHook />} />

                <Route path='/multiple-custom-hooks' element={<MultipleCutomHooks />} />

                <Route path='/search-character' element={<SearchCharacter />} />

                <Route path='/focus-screen' element={<FocusScreen />} />

                <Route path='/layout' element={<Layout />} />

                <Route path='/memorize' element={<Memorize />} />

                <Route path='/memo-hook' element={<MemoHook />} />

                <Route path='/callback-hook' element={<CallbackHook />} />

                <Route path='/tarea' element={<Padre />} />

                <Route path='*' element={<Navigate to="/" />} />

            </Routes>

            <Footer />
        </>
    )
};

export default AppRouter;