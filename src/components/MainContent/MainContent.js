import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import classes from './mainContent.module.css';
import Filter from '../Filter/Filter';
import { EmptyList } from '../EmptyList/EmptyList'
import Tabs from '../Tabs/Tabs';
import TicketsList from '../TicketsList/TicketsList';
import { api } from '../../services/api';
import * as actions from '../../redux/actions';
import { filteredTicketsSelector } from '../../redux/filteredTicketsSelector';
import { ticketsSelector } from '../../redux/ticketsSelector';
import { Loader } from '../Loader/Loader';


function MainContent() {

    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState('');
    const dispatch = useDispatch();
    const tickets = useSelector(ticketsSelector);
    const filteredTickets = useSelector(filteredTicketsSelector);

    useEffect(() => {
        setLoading(true)
        async function fetchSearchId() {
            try {
                const id = (await axios.get(api.id)).data.searchId;
                setSearchId(id);
            } catch (e) {
                console.log(e)
            }
        };
        fetchSearchId();
    }, [setLoading]);

    useEffect(() => {
        setLoading(true);
        async function fetchTickets(searchId) {
            try {
                const tickets = (await axios.request({
                    url: `/tickets?searchId=${searchId}`,
                    method: 'get',
                    baseURL: api.tickets,
                })).data
                dispatch(actions.joinAction(tickets.tickets));
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchTickets(searchId);
    }, [searchId, dispatch, setLoading]);

    return (
        <>
            <div className={classes['loader-wrapper']}>
                {loading ? <Loader /> : ''}
            </div>
            <div className={`${classes.mainContent} + row`}>
                <Filter />
                <div className={`${classes.tickets} + col-9`}>
                    <Tabs />
                    {
                        filteredTickets.length !== 0 ?
                            <TicketsList />
                            :
                            <EmptyList text='Ни один рейс не соответствует заданным фильтрам.' />
                    }
                </div>
            </div>
        </>
    );
};


export default MainContent;