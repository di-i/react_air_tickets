import React, { useState } from 'react';
import { Radio } from 'antd';
import { useDispatch, connect } from 'react-redux';
import './tabs.css';
import { sortByPrice, sortByTime } from '../../redux/actions';


function Tabs({ syncTickets }) {
    const CHEAP = 'cheapest';
    const FAST = 'fastest';
    const dispatch = useDispatch();

    const [value, setValue] = useState(CHEAP);

    const onClickHandler = (value) => {
        setValue(value);
        switch (value) {
            case CHEAP:
                dispatch(sortByPrice(syncTickets));
                break;
            case FAST:
                dispatch(sortByTime(syncTickets));
                break;
            default:
                dispatch(sortByPrice(syncTickets));
                break;
        };
    };

    return (
        <>
            <div className='tickets__tabs'>
                <Radio.Group defaultValue={CHEAP} size='large' buttonStyle='solid' className='tabs__radio'>
                    <Radio.Button value={CHEAP} onClick={onClickHandler.bind(this, CHEAP)}>Самый дешевый</Radio.Button>
                    <Radio.Button value={FAST} onClick={onClickHandler.bind(this, FAST)}>Самый быстрый</Radio.Button>
                </Radio.Group>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        syncTickets: state.tickets.tickets
    };
}

export default connect(mapStateToProps, null)(Tabs);