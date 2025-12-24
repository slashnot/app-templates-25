import { Outlet } from 'react-router'
import classes from './AppLayout.module.css'
import NavigationSidebar from './components/NavigationSidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Breadcrumb from './components/Breadcrumb'

const AppLayout = () => {
    return (
        <div className={classes.AppLayout}>
            <div className={classes.sidebar}>
                <NavigationSidebar />
            </div>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.main}>
                <div className={classes.content}>
                    <Breadcrumb />
                    <Outlet />
                </div>
                <div className={classes['content-aside']}>Content aside</div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    )
}

export { AppLayout }
export default AppLayout