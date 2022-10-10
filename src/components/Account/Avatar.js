import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import person from '../../Assets/43.png'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Travis Howard" src={person} sx={{bgcolor: 'pink', width: 200, height: 200 }} />
    </Stack>
  );
}