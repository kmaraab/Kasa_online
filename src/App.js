import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className={`${styles.appContainer} d-flex flex-column`}>
      <Header />
      <div className={styles.appContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
