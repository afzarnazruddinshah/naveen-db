import React, { Fragment } from "react";
import {HashRouter, Route, Redirect, Switch } from "react-router-dom";
import AddRecord from "../AddRecord/addRecord";
import ViewRecords from "../ViewRecords/viewRecords";
import Home from "../Home/home";
import Notifications from "../Notifications/notifications";
import ErrorBoundary from "../ErrorBoundary/errorboundary";
import PageNotFound from "../PageNotFound/pagenotfound";
import EditRecord from "../EditRecord/editRecord";
import Login from "../Login/login";
import SignUp from "../SignIn/signin";
import PasswordReset from '../PasswordReset/passwordreset';
import ReportChart from "../ReportChart/ReportChart";
const Routes = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route
          exact
          path="/naveen-db/"
          render={() => <Redirect to="/login" />}
        />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" render={ ()=> <Login />} />
        <Route exact path="/signup" render={ ()=> <SignUp />} />
        <Route exact path="/dashboard" render={() => <Home />} />
        <Route exact path="/addrecords" render={() => <AddRecord />} />
        <Route exact path="/notifications" render={() => <Notifications />} />
        <Route exact path="/viewrecords" render={() => <ViewRecords />} />
        <Route exact path="/editrecord/:id" render={() => <EditRecord />} />
        <Route exact path="/resetpwd" render={() => <PasswordReset />} />
        <Route exact path="/reports" render={() => <ReportChart />} />
        <Route
          render={() => (
            <Fragment>
              <ErrorBoundary>
                <PageNotFound />
              </ErrorBoundary>
            </Fragment>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
