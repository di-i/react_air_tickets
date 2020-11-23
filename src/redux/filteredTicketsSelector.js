
import { createSelector } from 'reselect';

export const filteredTicketsSelector = createSelector(
    [
        state => state.tickets.tickets,
        state => state.filter.filter(filter => filter.active)
    ],
    (tickets, filter) => {

        const checkedFilters = ticket => {
            for (let i = 0; i < filter.length; i++) {
                if (filter[i].check(ticket)) return true;
            }
            return false;
        }

        return tickets.filter(checkedFilters).slice(0, 5);
    }
)