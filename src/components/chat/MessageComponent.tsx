// Copyright (c) 2025, René Milzarek
// SPDX-License-Identifier: MIT

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface MessageComponentProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[900],
        borderRadius: '8px',
        padding: '8px',
        maxWidth: '75%',
        ...sx,
      }}
    >
      <Typography>
        {children}
      </Typography>
    </Box>
  );
};

export default MessageComponent;