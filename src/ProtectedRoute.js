import { Route } from 'react-router-dom'
import Login from './components/Login'

function ProtectedRoute({ isAuth, component: Component, setAuth }) {
    console.log(isAuth);
    return (
        <Route
            render= {(props) => {
                if (isAuth) {
                    return <Component/>;
                } else {
                    return <Login setAuth={setAuth}/>;
                }
            }}
        />
    )
}

export default ProtectedRoute;