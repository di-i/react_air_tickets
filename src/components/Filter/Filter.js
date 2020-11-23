import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/filterSelectors';
import { toggleAction } from '../../redux/filterReducer';
import classes from './filter.module.css';


function Filter() {

    const dispatch = useDispatch();
    const filter = useSelector(filterSelector);

    const onChangeHandler = id => event => {
        dispatch(toggleAction(id));
    };

    const checkItems = filter.map(checkItem => {
        return <div className={classes.filters__listItem}>
            <input className={classes.filters__listCheckbox} type='checkbox' id={checkItem.id} value={checkItem.value} active={checkItem.active} checked={checkItem.active} onClick={onChangeHandler(checkItem.id)} />
            <label className={classes.filters__listLabel} htmlFor={checkItem.id}>{checkItem.value}</label>
        </div>

    }
    );

    return (
        <>
            <div className='col-3'>
                <div className={classes.filters}>
                    <div className={classes.title}>
                        Количество пересадок
                </div>
                    <div className={classes.filters__list} >
                        {checkItems}
                        {console.log(checkItems)}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Filter;