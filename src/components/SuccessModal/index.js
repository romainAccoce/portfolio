import './success-modal.scss';
import { useSelector } from 'react-redux';
import Button from '../Button';

const SuccessModal = () => {
    const { displaySuccessModal } = useSelector((state) => state.displayOptions);

    return (
        <div className='success-modal'>
            <div className='success-modal__window'>
                <div className='success-modal__window__text-content'>{displaySuccessModal}</div>
                <div className='success-modal__window__button'>
                    <Button name='Home' link='/' size='large' />
                </div>

            </div>
        </div>
    );
};

export default SuccessModal;