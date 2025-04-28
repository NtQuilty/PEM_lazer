import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

interface PhoneMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const PhoneMaskCustom = forwardRef<HTMLInputElement, PhoneMaskCustomProps>(
  function PhoneMaskCustom(props, ref) {
    const { onChange, name, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask='+7(000)-000-00-00'
        inputRef={ref}
        onAccept={(value: any) => {
          onChange({ target: { name, value } });
        }}
        overwrite
        prepare={(str: string) => {
          if (str.startsWith('8') || str.startsWith('7')) {
            return '+7' + str.substring(1);
          }
          return str;
        }}
      />
    );
  }
);
