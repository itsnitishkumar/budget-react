import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance(props) {
    const textAlign = props.align
    return (
        <Statistic size={props.size} color={props.color}>
            <Statistic.Label style={{textAlign: textAlign}}>{props.label}</Statistic.Label>
            <Statistic.Value>{props.value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance