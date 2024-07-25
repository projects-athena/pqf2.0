import React from 'react';
import { Box, Card, CardMedia } from '@mui/material';
import { Course } from '@/app/types/types';

const CardCursosMaisComprados: React.FC<Course> = ({ title, image }) => {
    return (
        <Box display="grid" justifyContent="center" alignItems="center">
            <Card
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' },
                    height: { xs: 'auto', sm: '200px' },
                    width: { xs: '100%', sm: '180px' },
                    backgroundColor: '#161616'
                }}
            >
                <CardMedia
                    sx={{
                        height: { xs: '150px', sm: '170px' },
                        width: { xs: '100%', sm: '170px' },
                        marginTop: { xs: '10px', sm: '25px' },
                        marginRight: { xs: '0', sm: '10px' }
                    }}
                    component="img"
                    image={image}
                    title={title}
                />
            </Card>
        </Box>
    );
}

export default CardCursosMaisComprados;
