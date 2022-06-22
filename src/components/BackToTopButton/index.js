import './back-to-top-button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setScrollToTopButton } from '../../actions/displayOptions';
import { FaAngleDoubleUp } from 'react-icons/fa'

const BackToTopButton = () => {
    const dispatch = useDispatch();
    const { scrollToTopButton } = useSelector((state) => state.displayOptions);
    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth',
        });
    };

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
        <div onClick={ () => scrollToTop()} className={ scrollToTopButton ? 'scroll' : 'scroll scroll--reverse' }>
            <div className={ scrollToTopButton ? 'scroll__to-top' : 'scroll__to-bottom' }  >
                <FaAngleDoubleUp />
            </div>
        </div>
    );
};

export default BackToTopButton;