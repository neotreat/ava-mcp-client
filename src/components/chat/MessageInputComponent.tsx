// Copyright (c) 2025, René Milzarek
// SPDX-License-Identifier: MIT

import { Box, TextField, Button, IconButton } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SendIcon from '@mui/icons-material/Send';
import MenuListComposition from "./FileMenuComponent";

const MessageInputComponent: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '100%',
                margin: '48px 0',
                padding: '16px',
                borderRadius: '8px',
                borderStyle: 'solid',
                broderColor: theme.palette.grey[900],
                borderWidth: '1px',
            }}
        >
            <TextField
                id="outlined-textarea"
                placeholder="How can I help you?"
                variant="standard"
                multiline
                fullWidth
            />
            <Box sx={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label="delete">
                    <AddBoxIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton aria-label="send" color="primary">
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    );
  };
  
  export default MessageInputComponent;