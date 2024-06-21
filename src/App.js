
import { RouterProvider } from 'react-router-dom';
import { userRouter } from './routes/userRouter';
import { adminRouter } from './routes/adminRouter';


function App() {

  const isAdmin = true;
  return(
    <>
    {/* <RouterProvider router={isAdmin? adminRouter : userRouter}/> */}
    <RouterProvider router={userRouter}/>
    {/* <RouterProvider router={adminRouter}/> */}
    </>
  )

}

export default App;
