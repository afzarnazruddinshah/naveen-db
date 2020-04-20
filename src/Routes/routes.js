import React, { Fragment, useState} from 'react';
import {BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import AddRecord from '../AddRecord/addRecord';
import ViewRecords from '../ViewRecords/viewRecords';
import Home from '../Home/home';
import Notifications from '../Notifications/notifications';
import ErrorBoundary from '../ErrorBoundary/errorboundary';
import PageNotFound from '../PageNotFound/pagenotfound';

const Routes = () => {
   
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/naveen-db/" render={ ()=> <Redirect to="/dashboard" />} />
                <Route exact path="/" render={ ()=> <Redirect to="/dashboard" />} />
                <Route exact path="/dashboard" render={ ()=> <Home />} />
                <Route exact path="/addrecords" render={ ()=> <AddRecord />} />
                <Route exact path="/notifications" render={ ()=> <Notifications />} />
                <Route exact path="/viewrecords" render={ ()=> <ViewRecords />} />  
                <Route
                      render={
                        () =>
                          <Fragment>
                            <ErrorBoundary>
                              <PageNotFound />
                            </ErrorBoundary>
                          </Fragment>
                      }
                    />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;