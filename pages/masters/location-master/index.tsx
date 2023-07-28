import * as React from 'react';
import Table from "@/components/Ui/Table";
import { FiEye } from 'react-icons/fi';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi'
import { IoFilterSharp } from 'react-icons/io5'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Breadcrumbs from '@/components/Ui/BreadCrumbs';

const Location = () => {
  // const [isFilter,setIsFilter] = React.useState(true)
  // const [open, setOpen] = React.useState(false);
  const columns = [
    { field: 'type', headerName: 'LOCATION TYPE', width: 200 },
    { field: 'id', headerName: 'LOCATION ID', width: 200 },
    { field: 'description', headerName: 'LOCATION DESCRIPTION', width: 200 },
    { field: 'floor', headerName: 'FLOOR', width: 200 },
    { field: 'row', headerName: 'ROW', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className='grid gap-x-6 grid-cols-3'>
            <FiEye
              className='w-6 h-6 text-blue-500'
              onClick={() => console.log(params.row.id)}
              style={{ cursor: 'pointer', marginRight: '8px' }}
            />
            <TbEdit
              className='w-6 h-6 text-green-500'
              onClick={() => console.log(params.row.id)}
              style={{ cursor: 'pointer', marginRight: '8px' }}
            />

            <AiOutlineDelete
              className='w-6 h-6 text-red-500'
              onClick={() => console.log(params.row.id)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        );
      },
    }
  ];

  const rows = [
    { id: 2001, type: 'B', description: 'Test', floor: '1st', row: '1st' },
    { id: 2002, type: 'B', description: 'B101', floor: 'B', row: '01' },
    { id: 2003, type: 'B', description: 'B102', floor: 'B', row: '02' },
    { id: 2004, type: 'B', description: 'B103', floor: 'B', row: '03' },
    { id: 2005, type: 'B', description: 'B104', floor: 'B', row: '04' }
  ];

  const zones = [
    { value: 'A', label: 'A Zone' },
    { value: 'B', label: 'B Zone' },
    { value: 'C', label: 'C Zone' }
  ]

  const accessCode = [
    { value: 'high', label: 'High' },
    { value: 'low', label: 'Low' }
  ]

  const locationType = [
    { value: 'gravity_basement', label: 'Gravity Racks Basement' },
    { value: 'basement_dock_01', label: 'Basement Dock-01' },
    { value: 'basement_dock_02', label: 'Basement Dock-02' },
    { value: 'basement_dock_03', label: 'Basement Dock-03' },
    { value: 'basement_dock_04', label: 'Basement Dock-04' }
  ]

  const locationClass = [
    { value: 'cross_dock', label: 'Cross Dock' },
    { value: 'dock_door', label: 'Dock Door' },
    { value: 'open_area', label: 'Open Area' }
  ]
  return (
    <div className="hero min-h-screen bg-content">
      <div className="pt-10 bg-content px-10 ">
      <Breadcrumbs/>
        <div className="mt-8 w-full">
         
        <div className="collapse  w-full pl-4 bg-base-100">
        <input type="checkbox" id="collapse-checkbox"/>
            <div className="collapse-title text-xl font-medium">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-center">Location Selection</h2>
                <div className="grid gap-x-6 grid-cols-3 justify-items-end">
                  <button
                    className="btn btn-ghost bg-base-200 btn-circle cursor-pointer"            >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <label  htmlFor="collapse-checkbox">
                 
                  <button
                    className="btn btn-ghost bg-base-100 border-neutral-content btn-circle normal-case rounded-3xl w-32"
                  >
                    <IoFilterSharp />
                    <span className="text-lg normal-case">Filter</span>
                  </button>
                  </label>
                  <button className="btn bg-green-500 w-32 hover:bg-green-500" onClick={() => console.log("hi")}>
                    <BiPlusMedical className="text-base-100 text-lg" />
                    <span className="text-base-200 text-lg normal-case" >New</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className='grid gap-x-6 gap-y-10 grid-cols-3 justify-items-end'>
                {/* First Row */}
                <TextField label="Location Selection" variant="outlined" className='w-96' />
                <TextField select label="Location Type" helperText="Please select your location type" variant="outlined" className='w-96' >
                  {locationType.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField select label="Location Class" helperText="Please select your location class" variant="outlined" className='w-96' >
                  {locationClass.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {/* Second Row */}
                <TextField
                  className='w-96'
                  select
                  label="Put Zone"
                  helperText="Please select your zone"
                >
                  {zones.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className='w-96'
                  select
                  label="Location Access Code"
                  helperText="Please select your access code"
                >
                  {accessCode.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField label="Pick Face SKU Code" variant="outlined" className='w-96' />

                {/* Third Row */}
                <TextField label="Control Code" variant="outlined" className='w-96' />
                <div></div>

                <button className="btn bg-blue-500 w-32 hover:bg-blue-500 justify-right"><span className='text-base-200 text-lg normal-case'>Select</span></button>
              </div>
            </div>


          </div>

      

          {/* <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" checked={isFilter} />
            <div className="collapse-title text-xl font-medium" onClick={()=>{setIsFilter(!isFilter)}}>
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div> */}

          <div className='mt-8'>
            <Table rows={rows} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;