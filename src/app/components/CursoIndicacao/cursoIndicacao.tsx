import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';


export default function CursoIndicacao() {
  
  return (
    <Card sx={{ maxWidth: '100%', position: 'relative' }}>
        <CardMedia
            component="img"
            height="194"
            image="/images/bg/Analise-de-mercado.png"
            alt="AnALISE"
        />
        <IconButton sx={{position: 'absolute', top: 8, right: 8, borderRadius: 5}}>
            <FavoriteIcon sx={{color: 'secondary.contrastText'}}/>
        </IconButton>

        <CardContent>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            Nome do Curso
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
            Nome do Instrutor
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Pequena descrição do curso. Uma breve descrição que resuma o que será abordado no curso e o que os alunos podem esperar aprender.
            </Typography>
            <Button variant="contained" color="primary">
            Saiba mais!
            </Button>
      </CardContent>
    </Card>
  );
}
