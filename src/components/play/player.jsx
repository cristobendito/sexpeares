import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      </Box>
      <Box sx={{ width: 300, height: 152 }}>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/3fFvapPXdQkd8C6O8Mw08s?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Box>
    </Card>
  );
}
