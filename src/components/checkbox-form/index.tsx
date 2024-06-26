import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckboxFormProps } from 'types'
import Button from 'components/button';
import './style.scss'

export default function CheckboxForm({ options, stageToRedirect }: CheckboxFormProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const { t } = useTranslation()

    function handleCheckboxChange(option: string) {
        const updatedSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(item => item !== option)
            : [...selectedOptions, option]

        setSelectedOptions(updatedSelectedOptions)
    };

    return <form className='checkbox-form'>
        <ul className="checkbox-list" style={{ listStyle: 'none' }}>
            {options.map(option => (
                    <li key={option} className='checkbox-container'>
                        <input
                            type="checkbox"
                            id={option}
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className='checkbox'
                        />
                        <label htmlFor={option} className='checkbox-label'>{option}</label>
                    </li>
                ))}
        </ul>
        <Button 
        isDisabled={!selectedOptions.length} 
        stageToRedirect={stageToRedirect} 
        text={t('next-button-text')} 
        alignSelf='center' 
        />
    </form>
}