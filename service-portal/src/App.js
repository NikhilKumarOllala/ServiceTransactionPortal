import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
//registration
import RegPageseeker from './components/registration/Registrationpageseeker.js'
import RegPagegiver from './components/registration/Registrationpagegiver.js'
import Loginpageopt from './components/registration/Loginoption'
import Error from './components/Error'
import Login from './components/registration/Login.js'

//dashboard
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/dashboard/NavigationBar';
import { Home } from './components/dashboard/Home';
import { History } from './components/dashboard/History';
import { Profile } from './components/dashboard/Profile';
import Sidebar from './components/dashboard/Sidebar';
import  Search  from './components/dashboard/Search';
import {About} from './components/dashboard/About';
import { NavigationBarprof } from './components/dashboard/NavigationBarprof';
import  Sidebarprof from './components/dashboard/Sidebarprof';
import { ProfAbout } from './components/dashboard/ProfAbout';
import { ProfHome } from './components/dashboard/ProfHome';
import { ProfHistory} from './components/dashboard/ProfHistory';
import { ProfProfile } from './components/dashboard/ProfProfile';
import Login_customer from './components/registration/Login_customer';




function App() {
  return (
    <div className="App">
      <header className="App-header">              
              {<Switch>
                  {/**registration paths */}
                  <Route exact path='/' component={Loginpageopt} />
                  <Route exact path='/loginProfessional' component={Login}/>
                  <Route exact path='/loginCustomer' component={Login_customer}/>
                  <Route exact path='/regpageseeker' component={RegPageseeker} /> 
                  <Route exact path='/regpagegiver' component={RegPagegiver} /> 
                  
                  {/*dashboard paths*/}
                  <Route exact path='/Home' render={(props) =>
                      <div>
                        
                        <Sidebar/>
                        <Home></Home>
                      </div>
                    }
                  />
                  <Route exact path='/history' render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <History></History>
                      </div>
                    }
                  />
                  <Route exact path='/profile' render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <Profile></Profile>
                      </div>
                    }
                  />
                  <Route exact path='/about' render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <About></About>
                      </div>
                    }
                  />
                  <Route exact path='/search' render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <Search></Search>
                      </div>
                    }
                  />
                  <Route exact path='/ProfHistory' render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        <ProfHistory></ProfHistory>
                       
                        
                        
                        
                      </div>
                    }
                  />
                  <Route exact path='/ProfHome' render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        <ProfHome/>
                        
                        
                      </div>
                    }
                  />
                  <Route exact path='/ProfProfile' render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        <ProfProfile/>
                        
                       
                      </div>
                    }
                  />
                  <Route exact path='/ProfAbout' render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        
                        <ProfAbout/>
                      </div>
                    }
                  />
            <Route component={Error} />
              </Switch>}            
              
      
      </header>
    </div>
  );
}

export default App;