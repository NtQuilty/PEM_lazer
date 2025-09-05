import PhoneInput from 'react-phone-number-input';
import { Box, styled } from '@mui/material';
import 'react-phone-number-input/style.css';

const StyledPhoneBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$isLightTheme',
})<{ $isLightTheme?: boolean }>`
  padding: 16.5px 14px;
  
  & input {
    border: none !important;
    outline: none !important;
    background: transparent !important;
    box-shadow: none !important;
    color: ${props => props.$isLightTheme ? '#333' : 'white'} !important;
    
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${props => props.$isLightTheme ? 'white' : '#262d37'} inset !important;
      -webkit-text-fill-color: ${props => props.$isLightTheme ? '#333' : 'white'} !important;
      background-color: transparent !important;
    }
    
    &::placeholder {
      color: ${props => props.$isLightTheme ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)'} !important;
    }
  }
`;

interface PhoneMaskCustomProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  onCountryChange?: (country: string | undefined) => void;
  isLightTheme?: boolean;
}

export const PhoneMaskCustom: React.FC<PhoneMaskCustomProps> = ({ value, onChange, onCountryChange, isLightTheme = true }) => {
  return (
    <StyledPhoneBox 
      $isLightTheme={isLightTheme}
      className={`rounded-2xl border focus-within:border-blue-500 ${
        isLightTheme 
          ? 'border-gray-300 bg-white hover:border-gray-400' 
          : 'border-white/15 bg-[#262d37] hover:border-white/25'
      }`}
    >
      <PhoneInput
        id="phone"
        value={value}
        onChange={(value) => {console.log(value); onChange(value || '')}}
        onCountryChange={onCountryChange}
        defaultCountry="RU"
        international
        countryCallingCodeEditable={false}
        placeholder="Ваш телефон *"
      />
    </StyledPhoneBox>
  );
};
