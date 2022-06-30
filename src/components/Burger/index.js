import './burger.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayMenu } from '../../actions/displayOptions';


const Burger = () => {
    const dispatch = useDispatch();
    const { displayMenu, scrollToTopButton } = useSelector((state) => state.displayOptions);

    return (
        <div className={ displayMenu ? 'burger' : 'burger burger--active' }   onClick={() => dispatch(setDisplayMenu())}>
            <div>_</div>
            <div>_</div>
            <div>_</div>
        </div>
    );
};

export default Burger;