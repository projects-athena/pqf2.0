import React from 'react';

// eslint-disable-next-line react/display-name
const Video = React.forwardRef<HTMLVideoElement, {}>((props, ref) => {
  return (
    <video ref={ref} width="600" controls>
      <source src="/api/video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});

export default Video;
