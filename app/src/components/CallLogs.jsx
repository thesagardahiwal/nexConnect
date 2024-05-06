import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CallLogs({callLogs, setCallId}) {
  const [open, setOpen] = React.useState(false);
  const [call, setCall] = React.useState('');

  const handleChange = (event) => {
    setCall(String(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const makeCall = () => {
    setCallId(call);
    setOpen(false);
  }

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button style={{color: "white"}} onClick={handleClickOpen}>Call</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Call Logs</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 2, minWidth: 320 }}>
              <InputLabel htmlFor="demo-dialog-native">Members</InputLabel>
              <Select
                native
                value={call}
                onChange={handleChange}
                input={<OutlinedInput label="Members" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                {callLogs?.map((member, i) => (
                    <option key={`index${i+999}`} value={member.id}>{member.id}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={makeCall}>Call</Button>
          <Button onClick={handleClose}>Back</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}