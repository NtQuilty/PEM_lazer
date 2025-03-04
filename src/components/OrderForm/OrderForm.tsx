import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
} from '@mui/material';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { SmartCaptcha } from '@yandex/smart-captcha';

interface OrderFormProps {
  open: boolean;
  onClose: () => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = () => {
    console.log({ name, phone, email, message });
    onClose();
  };

  const isFormValid = name && phone && email && message && agreeToTerms;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='lg'
      fullWidth
      slotProps={{
        paper: {
          className: 'bg-[#1A202C] bg-no-repeat bg-right',
          style: { backgroundImage: 'url(/images/zakaz.png)' },
        },
      }}
    >
      <IconButton onClick={onClose} className='absolute right-4 top-4 text-white z-10' size='large'>
        <IoCloseCircleOutline size={24} />
      </IconButton>

      <DialogContent className='p-8'>
        <div className='w-full md:w-1/2'>
          <Typography variant='h4' className='font-bold text-white mb-2'>
            Заказать услугу
          </Typography>
          <Typography variant='body1' className='text-gray-300 mb-6'>
            Отправьте заявку и мы свяжемся с вами в течение 15 минут
          </Typography>

          <div className='space-y-4'>
            <TextField
              fullWidth
              placeholder='Ваше имя'
              value={name}
              onChange={e => setName(e.target.value)}
              className='rounded'
              slotProps={{
                input: {
                  className: 'bg-white text-white rounded',
                  startAdornment: (
                    <Box className='mr-2 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                        <circle cx='12' cy='7' r='4'></circle>
                      </svg>
                    </Box>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              placeholder='Ваш телефон'
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className='rounded'
              slotProps={{
                input: {
                  className: 'bg-white text-white rounded',
                  startAdornment: (
                    <Box className='mr-2 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                      </svg>
                    </Box>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              placeholder='Ваш Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='rounded'
              slotProps={{
                input: {
                  className: 'bg-white text-white rounded',
                  startAdornment: (
                    <Box className='mr-2 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                        <polyline points='22,6 12,13 2,6'></polyline>
                      </svg>
                    </Box>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder='Ваше сообщение'
              value={message}
              onChange={e => setMessage(e.target.value)}
              className='rounded'
              slotProps={{
                input: {
                  className: 'bg-white text-white rounded',
                  startAdornment: (
                    <Box className='mr-2 text-gray-400 absolute top-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
                      </svg>
                    </Box>
                  ),
                },
              }}
            />

            <Box className='my-4'>
              <SmartCaptcha sitekey={''} />
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeToTerms}
                  onChange={e => setAgreeToTerms(e.target.checked)}
                  className='text-white'
                />
              }
              label={
                <Typography variant='body2' className='text-gray-300'>
                  Нажав кнопку "Отправить", вы даете согласие на обработку персональных данных.
                </Typography>
              }
            />

            <Button
              variant='contained'
              fullWidth
              disabled={!isFormValid}
              onClick={handleSubmit}
              className='py-3 bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium'
            >
              Отправить
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
