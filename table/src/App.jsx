
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {

  const columns = [

    {
      field: 'customerName',
      headerName: 'CUSTOMER NAME',
      headerAlign: 'center',
      width: 200,
      renderCell: (params) => (
        <div className='flex items-center py-2' >
          <div>
            <Avatar alt="name" src="https://st2.depositphotos.com/17968594/46141/i/450/depositphotos_461418412-stock-photo-portrait-handsome-tomboy-girl-who.jpg" />
          </div>
          <div className='ml-2' >
            <p className='font-bold text-sm '>{params.row.customerName}</p>
            <p className=' text-sm '>{params.row.phone}</p>
          </div>
        </div>
      ),
    },
    { field: 'email', headerName: 'EMAIL',  headerAlign: 'center', width: 230,
    renderCell: (params) => (
      <div className=' py-2' >
          <p className=' text-sm '>{params.row.email}</p>
      </div>
    ),
  },
    {
      field: 'location', headerName: 'LOCATION',  headerAlign: 'center', width: 250,
      renderCell: (params) => (
        <div className='flex items-center flex-col py-2' >
         
            <p className='font-bold text-sm '>{params.row.MainLocation}</p>
            <p className=' text-sm '>{params.row.location}</p>
      
        </div>
      ),
    },
    { field: 'machine', headerName: 'MACHINE',  headerAlign: 'center', width: 90,
    renderCell: (params) => (
      <div className=' py-2' >
          <p className=' text-sm '>{params.row.machine}</p>
      </div>
    ), },
    { field: 'wallet', headerName: 'WALLET',  headerAlign: 'center', width: 230,
    renderCell: (params) => (
      <div className='flex items-center flex-col py-2' >
       
          <p className='font-bold text-sm text-left'>Showa Balance: <span className='ml-2 font-normal'>{params.row.wallet}</span></p>
          <p className=' text-sm font-bold text-left'>Showa Points: <span className='ml-2 font-normal'>{params.row.point}</span></p>
    
      </div>
    ), },
    {
      field: 'subscription',
      headerName: 'SUBSCRIPTION',
      headerAlign: 'center',
      width: 130,
      renderCell: (params) => {
        let color;
        switch (params.value) {
          case 'Basic':
            color = '#80BCBD';
            break;
          case 'Normal':
            color = '#596FB7';
            break;
          case 'Premium':
            color = '#B7E5B4';
            break;
          default:
            color = 'grey';
        }
        return <Chip label={params.value} style={{ backgroundColor: color }} className='w-48' />;
      },
    },
    {
      field: 'action',
      headerName: 'ACTION',
      headerAlign: 'center',
      width: 100,
      renderCell: (params) => (
        <ActionMenu />
      ),
    },
  ];

  function ActionMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>

          <DialogActions className='flex flex-col gap-2  justify-start items-center  px-5 py-5 w-44'>
            <button className='gap-2 items-center flex  btn  text-[#211951]' onClick={handleClose}> <VisibilityIcon /> View</button>
            <button className='gap-2 items-center flex' onClick={handleClose}><ModeEditIcon />Edit</button>
          </DialogActions>
        </Dialog>
      </div>
    );

  }




  const rows = [
    { id: 1, customerName: 'Fuji Shigeko', phone: '+8192-522-1055', email: 'tanakakobayashi@gmail.com', MainLocation:'2058-1104,kotta,Tama-shi,', location: 'Tokyo, Japan', machine: 'OB', wallet: '¥5000.00', 
    point:'5000.00',subscription: 'Basic', ACTION: ':' },
    { id: 2, customerName: 'johm Shigeko', phone: '+8192-522-1055', email: 'tanakakobayashi@gmail.com', MainLocation:'2058-1104,kotta,Tama-shi,', location: 'Tokyo, Japan', machine: 'OB', wallet: '¥5000.00',point:'5000.00', subscription: 'Normal', ACTION: ':' },
    { id: 3, customerName: 'Fuji Shigeko', phone: '+8192-522-1055', email: 'tanakakobayashi@gmail.com', MainLocation:'2058-1104,kotta,Tama-shi,', location: 'Tokyo, Japan', machine: 'OB', wallet: '¥5000.00', point:'5000.00',subscription: 'Premium', ACTION: ':' },
    { id: 4, customerName: 'Fuji Shigeko', phone: '+8192-522-1055', email: 'tanakakobayashi@gmail.com', MainLocation:'2058-1104,kotta,Tama-shi,', location: 'Tokyo, Japan', machine: 'OB', wallet: '¥5000.00', point:'5000.00',subscription: 'Premium', ACTION: ':' },
    { id: 5, customerName: 'Fuji Shigeko', phone: '+8192-522-1055', email: 'tanakakobayashi@gmail.com',MainLocation:'2058-1104,kotta,Tama-shi,',  location: 'Tokyo, Japan', machine: 'OB', wallet: '¥5000.00',point:'5000.00', subscription: 'Basic', ACTION: ':' },

  ];


  return (
    <>


      <div className='w-[1200px] mt-16 ml-16 text-sm' style={{ height: 400 }}>
        <div className='flex justify-between my-5'>
          <h2>Recent Customers</h2>
          <p>See All</p>
        </div>
        <DataGrid 
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />

        <p className='text-center my-3 text-[#474F7A]'>Copyright @ 2023 <span className='text-[#C7C8CC] '>showa</span> Designed with <FavoriteIcon className='text-red-600' /> All Rights Reserved.</p>
      </div>

    </>
  )
}

export default App

