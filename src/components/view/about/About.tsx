import Banner from './Banner'
import PhotoTimeline from './PhotoTimeline'
import WeddingStory from './WeddingStory'
import PhotoGallery from './PhotoGallery'
import Person from './Person'
import Faq from './Faq'
import Transport from './Transport'
import WeddingDayTimeline from './WeddingDayTimeline'
import ContactCards from './ContactCards'
import GetInTouch from './GetInTouch'
import { Box } from '@mui/material'

const About = () => {
  return (
      <Box>
        
        <Banner />
        <PhotoTimeline />
        <WeddingStory />
        <PhotoGallery />
        <Person />
        <Faq />
        <Transport />
        <WeddingDayTimeline />
        <ContactCards />
        <GetInTouch />
    </Box>
  )
}

export default About