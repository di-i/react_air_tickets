import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import Logo from './components/Logo/Logo';
import MainContent from './components/MainContent/MainContent'


function App() {
  return (
    <section className={classes.page}>
      <div className='container'>
        <div className={classes['main-wrapper']}>
          <Logo />
          <MainContent />
        </div>
      </div>
    </section>
  )
}

export default App;
