import React from 'react';
import { Card, CardBody } from 'shards-react';
import classes from './emptyList.module.css';


export const EmptyList = props => {
    return (
        <Card className={classes['card-wrapper']}>
            <CardBody>
                <div>{props.text}</div>
            </CardBody>
        </Card>
    );
};

