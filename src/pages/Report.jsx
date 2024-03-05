import Layout from "../components/Layout";
import '../styles/global.css';
import React, { useState, useEffect, useRef  } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';

import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import axios from "axios";
import Alert from '@mui/material/Alert';


const categories = [
  { value: '', label: 'None' },
  { value: 'WaterSupply', label: 'Water Supply' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'IT', label: 'IT' },
  { value: 'OrgPlanning', label: 'Organization Planning' },
  { value: 'Finance', label: 'Finance' },
  { value: 'HR', label: 'Human Resources' },
  { value: 'Admin', label: 'Administration' },
];

const importanceLevels = [
  { value: '', label: 'None' },
  { value: 'Low', label: 'Normal' },
  { value: 'Medium', label: 'Urgent' },
  { value: 'High', label: 'Very Urgent' },
  { value: 'MostHighest', label: 'Emergency' },
];

const relatedDepartments = [
  { value: '', label: 'None' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Sales', label: 'Sales' },
  { value: 'HumanResources', label: 'Human Resources' },
  { value: 'CustomerRelations', label: 'Customer Relations' },
  { value: 'Accounting/Finance', label: 'Accounting/Finance' },
];

function Report() {

  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [categoryText, setCategoryText] = useState('ยังไม่ระบุหมวดหมู่');
  const [departmentText, setDepartmentText] = useState('-');
  const [phoneNumberText, setPhoneNumberText] = useState('-');



  const handleCheckPhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    const isValid = regex.test(phoneNumber);
    setIsPhoneNumberValid(isValid);
  };

  const [isPosted, setIsPosted] = useState(false);

  const detailRef = useRef(null);

  const [data, setData] = useState({
    receivingDate: null,
    receivingTime: null,
    name: '',
    lastName: '',
    channel: '',
    phoneNumber: '',
    category: '',
    priority: '',
    department: '',
    detail: '',
  });

  const handleSave = () => {
    const detailValue = detailRef.current.value;
    const inputDate = data.receivingDate === null ? currentDate : data.receivingDate;
    const inputTime = data.receivingTime === null ? currentTime : data.receivingTime;

    const newData = {
      ...data,
      detail: detailValue,
      receivingDate: inputDate,
      receivingTime: inputTime,
    };

 
    axios.post('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-1-dwdap/endpoint/crmCardCreate', newData)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setIsPosted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(() => {
    if (!data.category) {
      setCategoryText('ยังไม่ระบุหมวดหมู่');
    } else {
      const selectedCategory = categories.find((cat) => cat.value === data.category);
      setCategoryText(selectedCategory ? selectedCategory.label : '');
    }
  }, [data.category]);


  useEffect(() => {
    if (!data.department) {
      setDepartmentText('-');
    } else {
      const selectedDepartment = relatedDepartments.find((cat) => cat.value === data.department);
      setDepartmentText(selectedDepartment ? selectedDepartment.label : '');
    }
  }, [data.department]);


  useEffect(() => {
    if (!data.phoneNumber) {
      setPhoneNumberText('-');
    } else {
      setPhoneNumberText(data.phoneNumber);
    }
  }, [data.phoneNumber]);

  

  useEffect(() => {
    console.log(data);
  }, [data]); 

  useEffect(() => {
    if (isPosted) {
      const timer = setTimeout(() => {
        setIsPosted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPosted]);


  const handleChange = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));``
  };

  const currentDate = dayjs();
  const currentTime = dayjs();

  const [channel, setChannel] = React.useState('');
  const [classification, setClassification] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [department, setDepartment] = React.useState('');

  const handleChangeChannel = (event) => {
    setChannel(event.target.value);
  };

  const handleChangeClass = (event) => {
    setClassification(event.target.value);
  };

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'Poppins', 'Noto Sans Thai', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 5px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${grey[900]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 1px ${theme.palette.mode === 'dark' ? blue[600] : blue[600]};
    }
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );


  return (
    <Layout>
      <React.Fragment>
      {isPosted && (
         <Alert
          variant="filled"
          severity="success"
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
            บันทึกสำเร็จ
        </Alert>
      )}
        <Box sx={{  height: '100vh'  ,mt: 2}}>
        
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <Card variant="outlined" sx={{p:1 , bgcolor: "#f0f5f5",  borderRadius: '16px'}}>
                <Box sx={{ display: "flex", justifyContent: 'space-between' , ml:2}}>
                  <Typography variant="body1" component="div" fontWeight="bold">{categoryText}</Typography>
                  <IconButton aria-label="more" size="small" sx={{color: 'gray'}}>
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'start' , ml:1 , alignItems: 'center'}}>
                  <IconButton aria-label="more" size="small">
                      <LocationOnOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" component="div">
                    {departmentText}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'start' , ml:1 , alignItems: 'center'}}>
                  <IconButton aria-label="more" size="small">
                      <PhoneCallbackOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" component="div">
                  {phoneNumberText}
                  </Typography>
                </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={9}>
                <Box >
                <FormControl style={{ width: '100%' }} >
                  <Box sx={{mb:3}}>
                  <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>การรับเรื่อง</Typography>
           
                  <Stack sx={{ xs: 12, sm: 12, md: 2, lg: 1}}  direction="row" useFlexGap flexWrap="wrap">
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 2, md: 2 }}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoItem label="วัน รับเรื่อง *">
                                <DatePicker 
                                defaultValue={currentDate} 
                                size="small"
                                onChange={(date) => setData({ ...data, receivingDate: date})} 
                                />
                              </DemoItem>
                            </LocalizationProvider>
                          </Grid>
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 0, md: 2 } }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoItem label="เวลา รับเรื่อง *">
                                <TimePicker 
                                defaultValue={currentTime} 
                                size="small" 
                                onChange={(time) => setData({ ...data, receivingTime: time})} 
                                />
                              </DemoItem>
                            </LocalizationProvider>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6} >
                            <DemoItem label="ช่องทาง *">
                            <FormControl style={{ width: '100%' }} >
                              <Select
                                value={data.channel}
                                onChange={(e) => setData({ ...data, channel: e.target.value})}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Channel Select' }}
                                style={{ width: '100%' }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value="Email">Email</MenuItem>
                                <MenuItem value="Telephone">Telephone</MenuItem>
                                <MenuItem value="WebsiteReport">Website Report</MenuItem>
                              </Select>
                              </FormControl>
                            </DemoItem>
                          </Grid>
                        </Stack>  
                  </Box>
                  <Box sx={{mb:3}}>
                  <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>ผู้แจ้งเรื่อง</Typography>
           
                  <Stack sx={{ xs: 12, sm: 12, md: 2, lg: 1}} direction="row" useFlexGap flexWrap="wrap">
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 2, md: 2 } }}>
                        
                              <DemoItem label="ชื่อ *">
                                <TextField 
                                fullWidth  
                                required
                                placeholder="ชื่อ"
                                id="name" 
                                onChange={(e) => handleChange('name', e.target.value)} 
                                />
                              </DemoItem>
                    
                          </Grid>
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 0, md: 2 } }}>                         
                              <DemoItem label="นามสกุล *">
                                <TextField 
                                fullWidth  
                                required
                                placeholder="นามสกุล"
                                id="lastName" 
                                onChange={(e) => handleChange('lastName', e.target.value)} 
                                />
                              </DemoItem>
                          </Grid>
                          <Grid container item xs={12} sm={12} md={6} sx={{display: 'flex', alignItems: 'center' }}>
                                <Grid item xs={9} sm={9} md={9}>
                                    <DemoItem label="เบอร์โทรศัพท์ *">
                                    <TextField 
                                    fullWidth  
                                    required
                                    placeholder="08XXXXXXXX"
                                    id="phoneNumber" 
                                    onChange={(e) => handleChange('phoneNumber', e.target.value)} 
                                    />
                                  </DemoItem>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} sx={{ mt: 4, display: 'flex', alignItems: 'end', justifyContent: { xs: 'end', sm: 'center', md: 'end' } }}>
                                     <Button 
                                          variant="contained" 
                                          color={isPhoneNumberValid ? 'success' : 'error'}
                                          onClick={() => handleCheckPhoneNumber(data.phoneNumber)}
                                        >
                                    ตรวจสอบ
                                  </Button>
                                </Grid>
                              </Grid>
                        </Stack>  
                  </Box>
                  <Box sx={{mb:3}}>
                  <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>ข้อมูลที่แจ้ง</Typography>
           
                  <Stack sx={{ xs: 12, sm: 12, md: 2, lg: 1}} direction="row" useFlexGap flexWrap="wrap">
                  <Grid item xs={12} sm={12} md={6} sx={{ pr: { xs: 0, md: 2 } }}>
                        <DemoItem label="หมวดหมู่">
                        <FormControl style={{ width: '100%' }} >
                          <Select
                            value={data.category}
                            onChange={(e) => setData({ ...data, category: e.target.value})}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Classification Select' }}
                            style={{ width: '100%' }}
                          >
                            {categories.map((category) => (
                              <MenuItem key={category.value} value={category.value}>
                                {category.label}
                              </MenuItem>
                            ))}
                          </Select>
                          </FormControl>
                        </DemoItem>
                          </Grid>
                          
                          <Grid item xs={12} sm={12} md={6}>
                          <DemoItem label="ระดับความสำคัญ *">
                          <FormControl style={{ width: '100%' }} >
                              <Select
                                value={data.priority}
                                onChange={(e) => setData({ ...data, priority: e.target.value})}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Priority Select' }}
                                style={{ width: '100%' }}
                              >
                                {importanceLevels.map((level) => (
                                  <MenuItem key={level.value} value={level.value}>
                                    {level.label}
                                  </MenuItem>
                                ))}
                              </Select>
                              </FormControl>
                            </DemoItem>
                              </Grid>
                             
                              <Grid item xs={12} sm={12} md={12} sx={{mt:{xs:0, md:2}}}>
                              <DemoItem label="ฝ่ายที่เกี่ยวข้อง *">
                              <FormControl style={{ width: '100%' }} >
                                  <Select
                                    value={data.department}
                                    onChange={(e) => setData({ ...data, department: e.target.value})}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Department Select' }}
                                    style={{ width: '100%' }}
                                  >
                                    {relatedDepartments.map((department) => (
                                      <MenuItem key={department.value} value={department.value}>
                                        {department.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  </FormControl>
                                </DemoItem>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{mt:{xs:0, md:2}, mb:3}}>
                                    <DemoItem label="รายละเอียด">
                                        <FormControl style={{ width: '100%' }}>
                                            <Textarea 
                                              aria-label="detail" 
                                              minRows={4} 
                                              placeholder="" 
                                              id="detail"
                                              ref={detailRef}

                                            />
                                      </FormControl>
                                    </DemoItem>
                                  </Grid>
                        
                        </Stack>  
                        <footer style={{ position: "sticky"
                        , bottom: 0
                        , width: "100%"
           
                        , backgroundColor: " rgba(209, 213, 219, 0.3)"
                        , padding: "15px 0px 15px 0px"
                        , textAlign: "center"
                        , display: "flex"
                        , justifyContent: "center"
                        , alignItems: "center"
                        , zIndex: 1
                        , borderRadius: "5px"
                        , boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)"
                         }}>
                          <Button 
                          variant="contained" 
                          style={{ justifySelf: "center", alignSelf: "center" }} 
                          onClick={handleSave}>
                          <SaveOutlinedIcon sx={{height: '20px'}}/> บันทึก
                          </Button>
                        </footer>
                  </Box>
                 

                </FormControl>
        
                </Box>
              </Grid>
            </Grid>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
    </Layout>
  );
}

export default Report;
