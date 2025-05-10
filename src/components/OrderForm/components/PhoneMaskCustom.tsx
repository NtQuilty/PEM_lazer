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
        mask='+0(000)-000-00-00'
        inputRef={ref}
        onAccept={(value: any) => {
          let formattedValue = value;
          console.log(value);
          if (value.startsWith('+8')) {
            formattedValue = '+7' + value.substring(2);
          }

          onChange({ target: { name, value: formattedValue } });
        }}
        overwrite
      />
    );
  }
);
