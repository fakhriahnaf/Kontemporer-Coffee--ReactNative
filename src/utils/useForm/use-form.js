import {useState} from 'react';

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);
    return [
        form,
        //('email', 'martinharis@mail.com')
        (formType, formValue) => {
            if (formType === 'reset'){
                return setForm(initialValue);
            }
            return setForm({...form, [formType]: formValue});
        }
    ]
};

export default useForm;