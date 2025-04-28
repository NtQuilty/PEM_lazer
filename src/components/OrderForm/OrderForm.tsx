import React, { useState } from 'react';
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
  Snackbar,
  Alert,
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
import { PhoneMaskCustom } from './components/PhoneMaskCustom';

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
    setValue,
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

  const [showAllFiles, setShowAllFiles] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
      const result = await response.json();
      if (result.success) {
        setSnackbar({
          open: true,
          message: `Заявка #${result.orderId} успешно отправлена!`,
          severity: 'success',
        });
        reset();
        onClose();
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Произошла ошибка при отправке заявки. Попробуйте снова',
        severity: 'error',
      });
    }
  };

  const onDeleteFiles = (index: number) => {
    setValue(
      'files',
      files.filter((_, i) => i !== index)
    );
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
      <Box sx={{ position: 'absolute', right: 16, top: 16 }}>
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <IoMdClose size={32} />
        </IconButton>
      </Box>

      <DialogContent className='p-4 sm:p-6 md:p-8'>
        <div className='md:w-1/2'>
          <div className='mb-2 sm:mb-4'>
            <Typography variant='h5' className='font-bold text-white sm:text-h4'>
              Заказать услугу
            </Typography>
            <Typography variant='body2' className='text-gray-300 sm:text-body1'>
              Отправьте заявку и мы свяжемся с вами
            </Typography>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 sm:space-y-4'>
            <Box className='flex justify-center gap-3 flex-col md:flex-row'>
              <Controller
                name='name'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Box className='flex flex-col gap-2 flex-1'>
                    <TextField
                      fullWidth
                      placeholder='Ваше имя *'
                      value={field.value}
                      onChange={field.onChange}
                      error={!!error}
                      slotProps={{
                        input: {
                          className: 'bg-white !rounded-2xl',
                          startAdornment: (
                            <Box className='mr-2'>
                              <IoPersonOutline size={20} color='black' />
                            </Box>
                          ),
                        },
                      }}
                    />
                    {error && (
                      <FormHelperText error className='md:ml-3'>
                        {error.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              />
              <Controller
                name='telephone'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Box className='flex flex-col gap-2 flex-1'>
                    <TextField
                      fullWidth
                      placeholder='Ваш телефон *'
                      value={field.value}
                      onChange={field.onChange}
                      error={!!error}
                      slotProps={{
                        input: {
                          inputComponent: PhoneMaskCustom as any,
                          className: 'bg-white !rounded-2xl',
                          startAdornment: (
                            <Box className='mr-2'>
                              <BsTelephone size={20} color='black' />
                            </Box>
                          ),
                        },
                      }}
                    />
                    {error && (
                      <FormHelperText error className='md:ml-3'>
                        {error.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              />
            </Box>

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
                    slotProps={{
                      input: {
                        className: '!rounded-2xl bg-white',
                        startAdornment: (
                          <Box className='mr-2'>
                            <HiOutlineMail size={20} color='black' />
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
                  rows={3}
                  placeholder='Ваше сообщение'
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    input: {
                      className: '!rounded-2xl bg-white',
                      startAdornment: (
                        <Box className='mr-2 mt-[-45px]'>
                          <FiMessageCircle size={20} color='black' />
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
              render={({ field, fieldState: { error } }) => (
                <Box className='flex flex-col gap-2'>
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
                      accept='.pdf,.dxf,.dwg,.stl,.step,.igs'
                      onChange={e => {
                        const fileList = e.target.files;
                        if (fileList) {
                          const allowedExtensions = ['pdf', 'dxf', 'dwg', 'stl', 'step', 'igs'];
                          const filesArray = Array.from(fileList).filter(file => {
                            const ext = file.name.split('.').pop()?.toLowerCase() || '';
                            return allowedExtensions.includes(ext);
                          });

                          if (filesArray.length !== fileList.length) {
                            setSnackbar({
                              open: true,
                              message:
                                'Некоторые файлы не были добавлены. Поддерживаются только PDF, DXF, DWG, STL, STEP, IGS.',
                              severity: 'error',
                            });
                          }

                          field.onChange([...field.value, ...filesArray]);
                        }
                      }}
                    />
                  </Button>
                  {error && (
                    <FormHelperText error className='md:ml-3'>
                      {error.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />

            {files && files.length > 0 && (
              <Box className='bg-gray-100 rounded-xl p-1 sm:p-2'>
                <Box className='flex flex-wrap gap-1 sm:gap-2'>
                  {(showAllFiles ? files : files.slice(0, 2)).map((file, index) => (
                    <Box
                      key={index}
                      className='bg-white rounded-xl px-1 py-0.5 flex items-center gap-1'
                    >
                      <Typography variant='caption' className='font-medium'>
                        {file?.name}
                      </Typography>
                      <Typography variant='caption' className='text-gray-500 ml-1'>
                        ({(file?.size / 1024).toFixed(0)} КБ)
                      </Typography>
                      <IconButton size='small' onClick={() => onDeleteFiles(index)}>
                        <MdClose size={16} />
                      </IconButton>
                    </Box>
                  ))}
                  {files.length > 2 && (
                    <Box className='bg-white rounded-full px-1 flex items-center'>
                      <Button size='small' onClick={() => setShowAllFiles(!showAllFiles)}>
                        {showAllFiles ? 'Скрыть' : `... и еще ${files.length - 2}`}
                      </Button>
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
              sx={{
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

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity={snackbar.severity} variant='filled'>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};
