import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface CursoDestaqueProps {
  image: string;
  title: string;
  subtitle: string;
}

const CursoDestaque: React.FC<CursoDestaqueProps> = ({ image, title, subtitle }) => {
  return (
    <Card
      sx={{
        width: 250, 
        borderRadius: '8px',
        boxShadow: 3,
        overflow: 'hidden'
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', marginBottom: 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CursoDestaque;
