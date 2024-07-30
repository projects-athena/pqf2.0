import React from 'react';
import { Container, Typography } from '@mui/material';
import VideoPlayer from '../components/Video/VideoPlayer';

const VideoPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Video Player
      </Typography>
      <VideoPlayer />
    </Container>
  );
};

export default VideoPage;