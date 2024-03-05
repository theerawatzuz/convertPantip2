
import Navbar from './Nav'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const YellowCircleIcon = styled(CircleIcon)({
  color: 'yellow',
});

const BlueCircleIcon = styled(CircleIcon)({
  color: 'blue',
});

const GreenCircleIcon = styled(CircleIcon)({
  color: 'green',
});

function App() {


  return (
    <>
        <Container maxWidth="lg">
          <Box className="announce" sx={{mt: 2 ,display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{display: 'flex',  alignItems: 'center', gap: 1}}>
              <YellowCircleIcon/>
              <p> 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 3 มีนาคม 📊</p>
            </Box>
            <Box sx={{display: 'flex',  alignItems: 'center' ,gap: 1}}>
              <BlueCircleIcon/>
              <p> มีนามีใจ...ชวนเธอคนดีมาเล่น </p>
              </Box>
              <Box sx={{display: 'flex',  alignItems: 'center' ,gap: 1}}>
                <GreenCircleIcon/> 
                <p>พันทิปเปิดตัวฟีเจอร์ใหม่</p>
              </Box>
          </Box>
          <Box className="room" sx={{p:3 ,display: 'flex', gap: 3, justifyContent: 'center'}} >
              <IconButton color="secondary">
                <KeyboardArrowLeftIcon/>
              </IconButton>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1, mt:1}}>
                  <StarBorderIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>รวมมิตร</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <MusicNoteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>เฉลิมกรุง</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <StayCurrentPortraitIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>มาบุญครอง</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <PermMediaIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>แกลลอรี</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow: 1 ,mt:1}}>
                  <FavoriteIcon />
                  <p style={{ marginTop: '1px', fontSize: '14px' }}>บางรัก</p>
              </Box>
              <IconButton color="secondary">
                <KeyboardArrowRightIcon/>
              </IconButton>
        
          </Box>
          <Box className="highlight" sx={{display: "flex", gap: 2}}>
          <Card sx={{ maxWidth: 275 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://ptcdn.info/home_highlight/2024-03/65e13a80caac0a4bc609c1d2_c02e8glsix_400.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Pantip Point
              </Typography>
            <p> ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม</p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 275 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://ptcdn.info/home_highlight/2024-03/65e14e80caac0a937410c5c4_umwyulxxk2_400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Bioderma
              </Typography>
            <p>ชวนร่วมสนุก ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา</p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 275 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              PANTIP PODCAST
              </Typography>
            <p>3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊</p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 275 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://ptcdn.info/home_highlight/2024-02/65cdd2a4caac0a697b0b2d96_n2x2059gdb_400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Review
              </Typography>
            <p>📌☀️ พี่แป้งชวนรีวิว “ครีมกันแดดตัวเด็ด“ ภาค 4 </p>
            </CardContent>
          </Card>
          </Box>
          <Box className="topic" sx={{p:2, mt: 2}}>
            <Typography variant="h5" gutterBottom>
              Pantip Pick
            </Typography>
            <p style={{ marginTop: '1px', fontSize: '14px' }}>กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip</p>
            </Box>
      </Container>
    </>
  )
}

export default App
