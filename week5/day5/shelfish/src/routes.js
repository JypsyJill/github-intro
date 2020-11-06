import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

export default (
    <Switch>
        <Route component={Dashboard} exact path= "/" />
        <Route component={Header} path="/Header" />
        <Route component={Form} path="/Form/:product_name" />
        <Route component={Product} path="/Product/:price" />
        <Route component={Product} path="/Product/:image_url"/>
    </Switch>
);