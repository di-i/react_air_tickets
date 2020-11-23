import { SORT_BY_PRICE, SORT_BY_TIME } from './types';

export function sortTicketsByPrice(items) {
    if (items) {
        const result = [...items];
        return result.sort((a, b) => a.price > b.price ? 1 : -1);
    }
};

function sortTicketsByTime(tickets) {
    const result = [...tickets];
    const reducer = (accum, segment) => accum + segment.duration;
    const reduce = result => result.segments.reduce(reducer, 0);
    return result.sort((a, b) => reduce(a) > reduce(b) ? 1 : -1);
};

export function sortByPrice(tickets) {
    return {
        type: SORT_BY_PRICE,
        payload: sortTicketsByPrice(tickets),
    }
};

export function sortByTime(tickets) {
    return {
        type: SORT_BY_TIME,
        payload: sortTicketsByTime(tickets),
    }
};

let i = 0;

export function changedTickets(state, tickets) {
    const newTickets = [...state, ...tickets].map(item => Object.assign(item, { id: i++ }))
    return newTickets
};

export function joinAction(tickets) {
    return {
        type: 'GET_TICKETS',
        payload: tickets
    }
};
