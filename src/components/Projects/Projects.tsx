import { useState } from 'react';
import { Box, Typography, Button, Modal, Container } from '@mui/material';
import { IoArrowDown } from 'react-icons/io5';
import { projectsData } from './const';

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const handleOpen = (imagePath: string, title: string) => {
    setSelectedImage(imagePath);
    setSelectedTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <Box className='py-5 bg-[#1a1e2c]'>
      <Container>
        <Typography variant='h2' component='h2' className='text-white mb-4 font-bold'>
          Наши проекты
        </Typography>

        <Box className='flex flex-wrap gap-3'>
          {visibleProjects.map(project => (
            <Box
              key={project.id}
              className='w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] relative h-60 rounded-md overflow-hidden cursor-pointer group'
              onClick={() => handleOpen(project.imagePath, project.title)}
            >
              <Box
                component='img'
                src={project.imagePath}
                alt={project.title}
                className='w-full h-full object-cover'
              />
              <Box className='project-overlay absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                <Typography variant='h6' className='text-white mb-1'>
                  {project.title}
                </Typography>
                <Button variant='text' className='text-white'>
                  Смотреть проект
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {!showAll && (
          <Box className='flex justify-center mt-4'>
            <Button
              variant='text'
              startIcon={<IoArrowDown />}
              onClick={handleShowMore}
              className='text-white'
            >
              Показать ещё
            </Button>
          </Box>
        )}
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='project-modal'
        aria-describedby='project-modal-description'
      >
        <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-black shadow-2xl p-1 flex flex-col items-center justify-center'>
          <Box
            component='img'
            src={selectedImage}
            alt='Project enlarged view'
            className='max-w-full max-h-[85%] object-contain'
            onClick={handleClose}
          />
          <Typography
            variant='h5'
            component='h3'
            className='text-white mt-3 text-center px-4 font-medium'
          >
            {selectedTitle}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
