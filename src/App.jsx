import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppRouter from './routes';
import Users from "./components/Users";
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import "./style.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return(
      <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'blue' }}></pre>
      <button onClick={resetErrorBoundary}>Try again</button>

      </div>
      )

}


const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'lightblue',
    transition: 'all 4s',
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: 'none' }
      }
      to={to}
      end
      {...props}
    />
  );
};

function Navbar() {
  return (
    <nav>
      <h1 className="logo">Welcome to my little project!</h1>
      <CustomNavLink to="/">HomePage</CustomNavLink>|{' '}
      <CustomNavLink to="/presh">Presh's</CustomNavLink>{' '}
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>

      <Navbar/>
      <Users/>
      
      {/* routes in our App */}
      <AppRouter />
      </ErrorBoundary>
    </div>
  );
}

export default App;

