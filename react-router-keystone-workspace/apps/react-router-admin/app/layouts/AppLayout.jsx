import { Outlet } from "react-router"
import classes from "./AppLayout.module.css"
import Sidebar from "@app/admin/components/Sidebar"

const AppLayout = () => {
    return (
        <div className={classes.appLayout}>
            <div className={classes.sidebar}>
                <Sidebar />
            </div>
            <div className={classes.header} />
            <div className={`${classes.main} p-12`}>
                <Outlet />
            </div>
        </div>
    )
}

export { AppLayout }
export default AppLayout