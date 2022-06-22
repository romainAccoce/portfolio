import './back-to-top-button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setScrollToTopButton } from '../../actions/displayOptions';
import { FaAngleDoubleUp } from 'react-icons/fa'

const BackToTopButton = () => {
    const dispatch = useDispatch();
    const { scrollToTopButton } = useSelector((state) => state.displayOptions);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                console.log('haut')
                dispatch(setScrollToTopButton(true));
            } else {
                console.log('bas')
                dispatch(setScrollToTopButton(false));
            }
        });
    }, []);


    return (
        <div className={ scrollToTopButton ? 'scroll-to-top' : 'scroll-to-top scroll-to-top--reverse' }  >
            <FaAngleDoubleUp />
        </div>
    );
};

export default BackToTopButton;