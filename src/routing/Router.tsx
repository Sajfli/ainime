import React, { FC } from 'react'

import {
    Switch, Route
} from 'react-router-dom'

import * as DefRoutes from 'views/index'

const RoutingComponent: FC = () => (
    <Switch>

        {/* Home */}
        <Route path="/" exact>
            <DefRoutes.Home text={'zzz'} />
        </Route>

        {/* Login */}
        <Route path="/Sign-In" exact>
            <DefRoutes.Login />
        </Route>

        {/* 404 */}
        <Route>
            404
        </Route>

    </Switch>
)

export default RoutingComponent