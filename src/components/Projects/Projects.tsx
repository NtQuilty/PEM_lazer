import { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import { IoArrowDown } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { projectsData } from './const';

export const Projects = ({ isHomePage }: { isHomePage: boolean }) => {
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
    <Box className={`relative mx-auto bg-[#1a1e2c] pb-[50px] ${isHomePage ? 'pt-[100px]' : 'pt-[50px]'}`}>
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <div className="heading-lg mb-10">Наши проекты</div>

        <Box className="flex flex-wrap gap-2 md:gap-3">
          {visibleProjects.map(project => (
            <Box
              key={project.id}
              className="group relative w-full cursor-pointer overflow-hidden rounded-md sm:w-[calc(50%-8px)] md:h-60 md:w-[calc(33.333%-12px)]"
              onClick={() => handleOpen(project.imagePath, project.title)}
            >
              <Box
                component="img"
                src={project.imagePath}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <Box className="project-overlay width-[100%] absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:p-3">
                <Typography variant="subtitle1" className="text-body mb-1">
                  {project.title}
                </Typography>
                <Button variant="text" className="text-body btn-text-sm !p-0">
                  Смотреть проект
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {!showAll && projectsData.length > 6 && (
          <Box className="mt-3 flex justify-center md:mt-4">
            <Button
              variant="text"
              startIcon={<IoArrowDown />}
              onClick={handleShowMore}
              className="text-body btn-text"
            >
              Показать ещё
            </Button>
          </Box>
        )}
      </div>

      <Modal open={open} onClose={handleClose} className="flex items-center justify-center p-2">
        <Box className="relative w-full max-w-none rounded-lg bg-[#1a1e2c] p-3 md:p-4" maxWidth="90vw" maxHeight="90vh">
          <Box className="mb-2 flex items-center justify-between">
            <Typography variant="h6" className="mb-3 text-base text-white md:text-lg">
              {selectedTitle}
            </Typography>
            <Button onClick={handleClose} className="!rounded-full" aria-label="close">
              <IoClose size={24} />
            </Button>
          </Box>

          <Box
            component="img"
            src={selectedImage}
            alt={selectedTitle}
            className="h-auto w-full object-contain"
          />
        </Box>
      </Modal>
    </Box>
  );
};
