import React from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  FormHelperText,
  IconButton,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoPersonOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FiMessageCircle } from 'react-icons/fi';
import { schema } from './hookform';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { VisuallyHiddenInput } from './style';
import { MdClose } from 'react-icons/md';

interface OrderFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  telephone: string;
  mail: string;
  message: string;
  agreeToTerms: boolean;
  files: File[];
}

export const OrderForm: React.FC<OrderFormProps> = ({ open, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      telephone: '',
      mail: '',
      message: '',
      agreeToTerms: false,
      files: [],
    },
  });

  const files = watch('files');

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (key !== 'files') {
        formData.append(key, String(data[key as keyof FormValues]));
      }
    });

    if (data.files && data.files.length > 0) {
      data.files.forEach((file: File) => {
        formData.append('files', file);
      });
    }

    try {
      const response = await fetch(
        'https://meyson-bot-pem-zay-bxzly0-0d088f-194-164-235-187.traefik.me/api/submit-form',
        {
          method: 'POST',
          body: formData,
        }
      );
      const result_1 = await response.json();
      if (result_1.success) {
        alert(`Заявка #${result_1.orderId} успешно отправлена!`);
        reset();
        onClose();
      } else {
        alert('Произошла ошибка при отправке заявки');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке заявки');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='lg'
      fullWidth
      slotProps={{
        paper: {
          style: {
            backgroundImage: 'url(/images/zakaz.png)',
            overflow: 'hidden',
          },
          className: '!rounded-2xl !bg-transparent',
        },
      }}
    >
      <Box sx={{ position: 'absolute', right: 16, top: 16, zIndex: 1 }}>
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <IoMdClose size={32} />
        </IconButton>
      </Box>

      <DialogContent className='p-4 sm:p-6 md:p-8'>
        <div className='w-full md:w-1/2 max-w-md '>
          <div className='mb-2 sm:mb-4'>
            <Typography variant='h5' className='font-bold text-white sm:text-h4'>
              Заказать услугу
            </Typography>
            <Typography variant='body2' className='text-gray-300 sm:text-body1'>
              Отправьте заявку и мы свяжемся с вами
            </Typography>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 sm:space-y-4'>
            <Controller
              name='name'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    fullWidth
                    placeholder='Ваше имя *'
                    value={field.value}
                    onChange={field.onChange}
                    error={!!error}
                    size='small'
                    autoComplete='off'
                    slotProps={{
                      input: {
                        className: 'bg-white !rounded-2xl',
                        startAdornment: (
                          <Box className='mr-2'>
                            <IoPersonOutline size={16} color='black' />
                          </Box>
                        ),
                      },
                    }}
                  />
                  {error && <FormHelperText error>{error.message}</FormHelperText>}
                </>
              )}
            />

            <Controller
              name='telephone'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    fullWidth
                    placeholder='Ваш телефон *'
                    value={field.value}
                    onChange={field.onChange}
                    error={!!error}
                    size='small'
                    autoComplete='off'
                    slotProps={{
                      input: {
                        className: 'bg-white !rounded-2xl',
                        startAdornment: (
                          <Box className='mr-2'>
                            <BsTelephone size={16} color='black' />
                          </Box>
                        ),
                      },
                    }}
                  />
                  {error && <FormHelperText error>{error.message}</FormHelperText>}
                </>
              )}
            />

            <Controller
              name='mail'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    fullWidth
                    placeholder='Ваш email'
                    type='email'
                    value={field.value}
                    onChange={field.onChange}
                    error={!!error}
                    size='small'
                    autoComplete='off'
                    slotProps={{
                      input: {
                        className: '!rounded-2xl bg-white',
                        startAdornment: (
                          <Box className='mr-2'>
                            <HiOutlineMail size={16} color='black' />
                          </Box>
                        ),
                      },
                    }}
                  />
                  {error && <FormHelperText error>{error.message}</FormHelperText>}
                </>
              )}
            />

            <Controller
              name='message'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  placeholder='Ваше сообщение'
                  value={field.value}
                  onChange={field.onChange}
                  className='rounded-2xl bg-white'
                  size='small'
                  autoComplete='off'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <Box className='mr-2 mt-[-25px]'>
                          <FiMessageCircle size={16} color='black' />
                        </Box>
                      ),
                    },
                  }}
                />
              )}
            />

            <Controller
              name='files'
              control={control}
              render={({ field }) => (
                <Button
                  component='label'
                  variant='outlined'
                  startIcon={<FaCloudDownloadAlt />}
                  className='bg-white text-black hover:bg-gray-100 w-full justify-center text-xs sm:text-sm py-1'
                  size='small'
                >
                  {field.value && field.value.length > 0
                    ? 'Файлов: ' + field.value.length
                    : 'Загрузить файлы'}
                  <VisuallyHiddenInput
                    type='file'
                    multiple
                    onChange={e => {
                      const fileList = e.target.files;
                      if (fileList) {
                        const filesArray = Array.from(fileList);
                        field.onChange(filesArray);
                      }
                    }}
                  />
                </Button>
              )}
            />

            {files && files.length > 0 && (
              <Box className='bg-gray-100 rounded p-1 sm:p-2'>
                <Box className='flex flex-wrap gap-1 sm:gap-2'>
                  {files.slice(0, 2).map((file, index) => (
                    <Box key={index} className='bg-white rounded px-1 py-0.5 flex items-center'>
                      <Typography variant='caption' className='font-medium'>
                        {file?.name}
                      </Typography>
                      <Typography variant='caption' className='text-gray-500 ml-1'>
                        ({(file?.size / 1024).toFixed(0)} КБ)
                      </Typography>
                      <IconButton size='small' onClick={() => undefined} sx={{ ml: 0.5, p: 0.2 }}>
                        <MdClose size={16} />
                      </IconButton>
                    </Box>
                  ))}
                  {files.length > 2 && (
                    <Box className='bg-white rounded px-1 py-0.5 flex items-center'>
                      <Typography variant='caption'>... и еще {files.length - 2}</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            )}

            <Controller
              name='agreeToTerms'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={field.onChange}
                        size='small'
                        sx={{
                          color: 'white',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant='caption' className='text-gray-300'>
                        Нажав кнопку "Отправить", вы даете согласие на обработку персональных
                        данных.
                      </Typography>
                    }
                  />
                  {error && <FormHelperText error>{error.message}</FormHelperText>}
                </>
              )}
            />

            <Button
              variant='contained'
              fullWidth
              type='submit'
              size='small'
              sx={{
                mt: 1,
                py: 0.75,
                opacity: isValid ? 1 : 0.7,
                '&:hover': {
                  cursor: isValid ? 'pointer' : 'not-allowed',
                },
              }}
            >
              Отправить
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
