import './success-modal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplaySuccessModal } from '../../actions/displayOptions';

const SuccessModal = () => {
    const dispatch = useDispatch();
    const { displaySuccessModal } = useSelector((state) => state.displayOptions);

    return (
        <div className='success-modal'  >
            <div className='success-modal__window' >
                <div className='success-modal__window__close-button' onClick={() => dispatch(setDisplaySuccessModal(''))}>+</div>
                <div className='success-modal__window__text-content'>{displaySuccessModal}</div>
            </div>
        </div>
    );
};

export default SuccessModal;