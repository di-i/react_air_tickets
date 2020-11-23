import { SORT_BY_PRICE, SORT_BY_TIME, GET_TICKETS } from './types'

import { sortTicketsByPrice, changedTickets } from './actions'


const initialState = {
    tickets: [],
}


export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS:
            return { ...state, tickets: sortTicketsByPrice(changedTickets(state.tickets, action.payload)) }
        case SORT_BY_PRICE:
            return { ...state, tickets: action.payload }
        case SORT_BY_TIME:
            return { ...state, tickets: action.payload }
        default: return { ...state, tickets: sortTicketsByPrice(state.tickets) }
    }
}



