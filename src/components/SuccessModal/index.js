import './success-modal.scss';
import { useSelector } from 'react-redux';

const SuccessModal = () => {
    const { displaySuccessModal } = useSelector((state) => state.displayOptions);

    return (
        <div className='success-modal'>
            {displaySuccessModal}
        </div>
    );
};

export default SuccessModal;