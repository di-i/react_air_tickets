import React from 'react';
import { Card, CardBody } from 'shards-react';
import classes from './ticketCard.module.css';
import * as helpers from '../helpers/Helpers'

function TicketCard({ ticket, carrier, segments }) {
    return (
        <>
            <div className={classes['ticket__card-wrapper']}>
                <Card className={classes.card}>
                    <CardBody className={classes['card-body']}>
                        <div className={`row ${classes['ticket__top-wrapper']}`}>
                            <div className={`col-6 ${classes['ticket__price-wrapper']}`}>
                                <p className={classes.ticket__price}>
                                    {ticket.price}
                                </p>
                            </div>
                            <div className={`col-6 ${classes['ticket__carrier-wrapper']}`}>
                                <img src={`http://pics.avs.io/99/36/{${carrier}}.png`} alt={carrier + " logo"} className={classes.ticket__carrier} alt='Carrier' />
                            </div>
                        </div>
                        <div className={`row ${classes['ticket__middle-wrapper']}`}>
                            <div className={classes['ticket__info-wrapper']}>
                                <div className={classes['ticket__col-wrapper']}>
                                    <p className={`${classes.ticket__title} ${classes.ticket__destination}`}>
                                        {segments[0].origin} - {segments[0].destination}
                                    </p>
                                    <p className={`${classes.ticket__info} ${classes.ticket__time}`}>
                                        {helpers.parseDate(segments[0].date, segments[0].duration)}
                                    </p>
                                </div>
                                <div className={classes['ticket__col-wrapper']}>
                                    <p className={`${classes.ticket__title} ${classes.ticket__way}`}>
                                        В пути
                                </p>
                                    <p className={`${classes.ticket__info} ${classes.ticket__duration}`}>
                                        {helpers.parseDuration(segments[0].duration)}
                                    </p>
                                </div>
                                <div className={classes['ticket__col-wrapper']}>
                                    <p className={`${classes.ticket__title} ${classes.ticket__count}`}>
                                        {helpers.getAmountTransfer(segments[0].stops.length)}
                                    </p>
                                    <p className={`${classes.ticket__info} ${classes['ticket__transfer-count']}`}>
                                        {segments[0].stops.join(',')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${classes['ticket__bottom-wrapper']}`}>
                            <div className={classes['ticket__info-wrapper']}>
                                <div className={classes['ticket__col-wrapper']}>
                                    <p className={`${classes.ticket__title} ${classes.ticket__destination}`}>
                                        {segments[1].origin} - {segments[1].destination}
                                    </p>
                                    <p className={`${classes.ticket__info} ${classes.ticket__time}`}>
                                        {helpers.parseDate(segments[1].date, segments[1].duration)}
                                    </p>
                                </div>
                                <div className={classes['ticket__col-wrapper']}>
                                    <p className={`${classes.ticket__title} ${classes.ticket__way}`}>
                                        В пути
                                </p>
                                    <p className={`${classes.ticket__info} ${classes.ticket__duration}`}>
                                        {helpers.parseDuration(segments[1].duration)}
                                    </p>
                                </div>
                                <div className={classes['ticket__col-wrapper']}>
                                    <p className={`${classes.ticket__title} ${classes.ticket__way}`}>
                                        {helpers.getAmountTransfer(segments[1].stops.length)}
                                    </p>
                                    <p className={`${classes.ticket__info} ${classes['ticket__transfer-count']}`}>
                                        {segments[1].stops.join(',')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default TicketCard;