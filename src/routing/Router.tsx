import React, { FC } from 'react'

import {
    Switch, Route
} from 'react-router-dom'

const RoutingComponent: FC = () => (
    <Switch>

        <Route path="/" exact>
            Index
        </Route>

        {/* 404 */}
        <Route>
            404
        </Route>

    </Switch>
)

export default RoutingComponent