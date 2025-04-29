import { useState } from 'react';
import { Box, Container, Typography, Button, Modal } from '@mui/material';
import { IoArrowDown } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { projectsData } from './const';

export const Projects = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [showAll, setShowAll] = useState(false);

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

  const visibleProjects = showAll && !isHomePage ? projectsData : projectsData.slice(0, 6);

  return (
    <Box className='py-4 md:py-5 bg-[#1a1e2c]'>
      <Container className='px-4 md:px-6'>
        <div className='text-white text-4xl md:text-6xl  mb-3 md:mb-10 font-bold'>Наши проекты</div>

        <Box className='flex flex-wrap gap-2 md:gap-3'>
          {visibleProjects.map(project => (
            <Box
              key={project.id}
              className='w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-12px)] relative md:h-60 rounded-md overflow-hidden cursor-pointer group'
              onClick={() => handleOpen(project.imagePath, project.title)}
            >
              <Box
                component='img'
                src={project.imagePath}
                alt={project.title}
                className='w-full h-full object-cover'
              />
              <Box className='project-overlay absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:p-3'>
                <Typography variant='subtitle1' className='text-white text-sm md:text-base mb-1'>
                  {project.title}
                </Typography>
                <Button variant='text' className='text-white text-xs md:text-sm !p-0'>
                  Смотреть проект
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {!showAll && projectsData.length > 6 && (
          <Box className='flex justify-center mt-3 md:mt-4'>
            <Button
              variant='text'
              startIcon={<IoArrowDown />}
              onClick={handleShowMore}
              className='text-white text-sm md:text-base'
            >
              Показать ещё
            </Button>
          </Box>
        )}
      </Container>

      <Modal open={open} onClose={handleClose} className='flex items-center justify-center'>
        <Box className='bg-[#1a1e2c] p-4 rounded-lg max-w-[90%] md:max-w-[80%] relative'>
          <Box className='flex justify-between items-center mb-2'>
            <Typography variant='h6' className='text-white mb-3 text-base md:text-lg'>
              {selectedTitle}
            </Typography>
            <Button onClick={handleClose} className='!rounded-full' aria-label='close'>
              <IoClose size={24} />
            </Button>
          </Box>

          <Box
            component='img'
            src={selectedImage}
            alt={selectedTitle}
            className='w-full h-auto max-h-[80vh]'
          />
        </Box>
      </Modal>
    </Box>
  );
};
