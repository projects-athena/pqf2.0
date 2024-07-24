// cardNovoCurso.tsx
import React from 'react';
import { Box, Card, CardMedia} from '@mui/material';
import { Course } from '@/app/types/types';

const CardCursosMaisComprados: React.FC<Course> = ({ title, image }) => {
    return (
        <Box display="grid" justifyContent="center" alignItems="center">
            <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', height: '200px', width: '180px', backgroundColor: '#161616' }}>
                <CardMedia
                    sx={{ height: '170px', width: '170px', marginTop: '25px', marginRight:'10px' }}
                    component="img"
                    image={image}
                    title={title}
                />
                <Box display="grid" gridTemplateRows="1fr auto" alignItems="center">
                </Box>
            </Card>
        </Box>
    );
}

export default CardCursosMaisComprados;