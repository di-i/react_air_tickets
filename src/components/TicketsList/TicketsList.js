import React from 'react';
import TicketCard from '../TicketCard/TicketCard';
import classes from './ticketsList.module.css';
import { useSelector } from 'react-redux';
import { filteredTicketsSelector } from '../../redux/filteredTicketsSelector';

function TicketsList() {

    const tickets = useSelector(filteredTicketsSelector);

    return (

        tickets.map(ticket => (
            <div className={classes.tickets__list}>
                <TicketCard ticket={ticket} carrier={ticket.carrier} segments={ticket.segments} key={ticket.duration} />
            </div>
        ))
    )
}

export default TicketsList;