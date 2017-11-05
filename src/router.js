import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './router.css';
import Home from './home/Home';
import Fiber from './fiber/Fiber';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/fiber">
            Fiber
          </NavLink>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/fiber" component={Fiber} />
      </div>
    </BrowserRouter>
  );
}
