"use client"

import { Button, Typography, Card, CardMedia, CardContent, CardActions, IconButton, Box, Avatar } from '@mui/material';
//import { Box, Button, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import { useState } from 'react';

interface CursoDestaqueHomeUserProps {
  image: string;
  professor: string;
  professorImage: string;
  curso: string;
  duracao: string;
  avaliacao: number;
}

const CursoDestaqueHomeUser: React.FC<CursoDestaqueHomeUserProps> = ({ image, professor, professorImage, curso, duracao, avaliacao }) => {

  const [iconColor, setIconColor] = useState('secondary.contrastText');

  const handleClick = () => {
    setIconColor(prevColor => prevColor === 'secondary.contrastText' ? 'error.main' : 'secondary.contrastText');
  };

  return (
    <Card sx={{ maxWidth: '100%', position: 'relative', backgroundColor: 'secondary.main', color: 'secondary.contrastText'}}>
        <CardMedia
            component="img"
            height="195"
            image={image}
            alt={curso}
        />
        <IconButton 
          sx={{
            position: 'absolute', 
            top: 8, 
            right: 10, 
            borderRadius: 5, 
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: 'black'
            }
          }}
          onClick={handleClick}
        >
          <BookmarkIcon sx={{ color: [iconColor], fontSize: 32 }}/>
        </IconButton>

        <Box sx={{ 
          position: 'absolute', 
          bottom: 132, 
          left: 8,
          display: 'flex', 
          zIndex: 1, 
          alignItems: 'center', 
          backgroundColor: 'black', 
          padding: '5px 10px', 
          borderRadius: '20px' 
        }}>
          <Avatar
            src={professorImage}
            alt="Professor" 
            sx={{ width: 50, height: 50, marginRight: '10px' }}
          />
          <Typography variant="body1">{professor}</Typography>
        </Box>
        

        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="h5" component="div" gutterBottom>
            {curso}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon />
              <Typography variant="body2">{duracao}</Typography>
              <StarIcon />
              <Typography variant="body2">{avaliacao}</Typography>
            </Box>
            <Button sx={{borderRadius: 5}} variant="contained" color="tertiary">
              Entre!
            </Button>
          </Box>
      </CardContent>
    </Card>
  );
};

export default CursoDestaqueHomeUser;