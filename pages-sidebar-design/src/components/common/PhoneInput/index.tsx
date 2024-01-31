import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import "./styles.scss"

interface PhonePropsInterface {
    disabled?: boolean,
    value?: string,
    onChange?: (val: string) => void
}

const PhoneInputField = (props: PhonePropsInterface) => {
    const { disabled, value, onChange } = props

    return (
        <div>
            <PhoneInput
                defaultCountry="ua"
                value={value}
                disabled={disabled}
                inputStyle={{ height: '55px', width: '100%' }}
                onChange={onChange}
                className='react-international-phone-input-container'
            />
        </div>
    );
};

export default PhoneInputField 