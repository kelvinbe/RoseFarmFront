import React, {} from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { GetAllPS4Games, GetAllPS5Games, GetAllPCGames, GetAllXBOXGames } from '../Games/GamesApi';
import {useDispatch} from 'react-redux'




const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function PlatformsMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState('Platform')
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const getPS4Games = async () => {
    setSelected('Playstation4')
    const resp = await GetAllPS4Games()
    dispatch({type: 'GET_PS4_GAMES', data: resp})
    setAnchorEl(null);
  };

  const getPS5Games = async () => {
    setSelected('Playstation5')

    const resp =  await GetAllPS5Games()
    dispatch({type: 'GET_PS5_GAMES', data: resp})
    setAnchorEl(null)
  }


  const getAllXBOXGames = async () => {
    setSelected('Xbox360')

    const resp =  await GetAllXBOXGames()
    dispatch({type: 'GET_XBOX_GAMES', data: resp})
    setAnchorEl(null)
  }
  const getAllPCGames = async () => {
    setSelected('PC')

    const resp =  await GetAllPCGames()
    dispatch({type: 'GET_PC_GAMES', data: resp})
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div style={{marginLeft: 52}}>
      <Button
      style={{backgroundColor: 'black'}}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selected}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={getPS4Games} disableRipple>
          <EditIcon />
          Playstation 4
        </MenuItem>
        <MenuItem onClick={getAllXBOXGames} disableRipple>
          <FileCopyIcon />
          Xbox 360
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={getPS5Games} disableRipple>
          <ArchiveIcon />
          Playstation 5
        </MenuItem>
        <MenuItem onClick={getAllPCGames} disableRipple>
          <MoreHorizIcon />
          PC
        </MenuItem>
      </StyledMenu>
    </div>
  );
}