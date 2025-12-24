import classes from './AuthLayout.module.css'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <div className={classes.AuthLayout}>
            <div className={classes.left}></div>
            <div className={classes.content}>
                <Outlet />
            </div>
            <div className={classes.right}></div>
        </div>
    )
}

export { AuthLayout }
export default AuthLayout