import { createSelector } from 'reselect';

export const ticketsSelector = createSelector(
    [
        state => state.tickets.tickets,
    ],
    tickets => tickets
)