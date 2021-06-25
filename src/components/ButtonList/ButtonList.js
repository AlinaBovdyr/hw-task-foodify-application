import React from 'react';
import Button from '../UI/Button/Button';
import s from './ButtonList.module.css'

const ButtonList = () => {
    return (
        <ul className={s.btnList}>
            <li className={s.btn}>
                <Button title='Skip' type='button' />
            </li>
            <li className={s.btn}>
                <Button title='Like' type='button' />
            </li>
        </ul>
    );
};

export default ButtonList;