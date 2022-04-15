import './burger.scss';
import { useDispatch } from 'react-redux';
import { setDisplayMenu } from '../../actions/displayOptions';


const Burger = () => {
    const dispatch = useDispatch();

    return (
        <div className='burger' onClick={() => dispatch(setDisplayMenu())}>
            <p>_</p>
            <p>_</p>
            <p>_</p>
        </div>
    );
};

export default Burger;