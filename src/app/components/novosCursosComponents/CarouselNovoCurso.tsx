'use client'
// CarouselNovoCurso.tsx
import React, { useState } from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardNovoCurso from './cardNovoCurso';
import { Course } from '@/app/types/types';

interface CarouselNovoCursoProps {
    courses: Course[];
}

const CarouselNovoCurso: React.FC<CarouselNovoCursoProps> = ({ courses }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(courses.length / itemsPerPage);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
    };

    const getCurrentItems = () => {
        const startIndex = currentIndex * itemsPerPage;
        return courses.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <IconButton onClick={handlePrevClick}>
                    <ArrowBackIosIcon sx={{ color: 'white' }} />
                </IconButton>
                <Grid container spacing={2} justifyContent="center">
                    {getCurrentItems().map((course, index) => (
                        <Grid item key={index}>
                            <CardNovoCurso 
                                title={course.title} 
                                subtitle={course.subtitle} 
                                image={course.image} 
                            />
                        </Grid>
                    ))}
                </Grid>
                <IconButton onClick={handleNextClick}>
                    <ArrowForwardIosIcon sx={{ color: 'white' }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CarouselNovoCurso;
