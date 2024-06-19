
import { RouterProvider } from 'react-router-dom';
import { userRouter } from './routes/userRouter';

function App() {

  return(
    <>
    <RouterProvider router={userRouter}/>
    </>
  )

}

export default App;
