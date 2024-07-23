import { Button, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Link from '@mui/material/Link';

interface CursoDestaqueProps {
  image: string;
  title: string;
  subtitle: string;
}

const CursoDestaque: React.FC<CursoDestaqueProps> = ({ image, title, subtitle }) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 280,
        borderRadius: '8px',
        boxShadow: 3,
        overflow: 'hidden',
        textAlign: 'left',
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowWrap: 'break-word',
        }}
      >
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 1,
            overflowWrap: 'break-word',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color= 'secondary.contrastText'
          sx={{ overflowWrap: 'break-word' }} 
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CursoDestaque;