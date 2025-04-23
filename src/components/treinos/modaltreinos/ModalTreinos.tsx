import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalTreinos.css'
import FormTreinos from '../formtreinos/FormTreinos';


function ModalTreinos() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Novo Treino
                    </button>
                }
                modal
            >
                <FormTreinos />
            </Popup>
        </>
    );
}

export default ModalTreinos;