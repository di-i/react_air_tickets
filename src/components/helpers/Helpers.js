
export const parseDuration = (duration) => `${Math.floor(duration / 60)}ч ${duration % 60}м`;

export const getAmountTransfer = (length) => {
    if (length === 0) {
        return 'Без пересадок'
    } else if (length === 1) {
        return '1 пересадка'
    } else if (length === 2) {
        return '2 пересадки'
    } else if (length === 3) {
        return '3 пересадки'
    };
};

export const getTime = (date) => date.toLocaleTimeString([], { timeStyle: 'short' });

export const parseDate = (date, duration) => {
    const dateStart = new Date(date);
    const dateEnd = new Date(dateStart.getTime() + duration * 60000);
    return `${getTime(dateStart)} - ${getTime(dateEnd)}`;
};
