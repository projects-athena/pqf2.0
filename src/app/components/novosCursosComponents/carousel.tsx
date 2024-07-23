'use client'
import React, { useState, useEffect } from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './carousel.css';

interface CarouselProps {
    children: React.ReactNode[];
    itemsPerPage?: number;
    direction?: 'row' | 'column';
}

const Carousel: React.FC<CarouselProps> = ({ children, itemsPerPage = 3, direction = 'row' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    const totalPages = Math.ceil(children.length / itemsPerPage);

    const handlePrevClick = () => {
        setAnimationClass('slide-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
            setAnimationClass('slide-in');
        }, 500); // Duration of the slide-out animation
    };

    const handleNextClick = () => {
        setAnimationClass('slide-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
            setAnimationClass('slide-in');
        }, 500); // Duration of the slide-out animation
    };

    const getCurrentItems = () => {
        const startIndex = currentIndex * itemsPerPage;
        return children.slice(startIndex, startIndex + itemsPerPage);
    };

    useEffect(() => {
        setAnimationClass('slide-in');
    }, [currentIndex]);

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <IconButton onClick={handlePrevClick}>
                    <ArrowBackIosIcon sx={{ color: 'white' }} />
                </IconButton>
                <Grid container spacing={1} justifyContent="center" direction={direction}>
                    {getCurrentItems().map((child, index) => (
                        <Grid item key={index} className={animationClass} style={{ transition: 'transform 0.5s ease-in-out' }}>
                            {child}
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

export default Carousel;
