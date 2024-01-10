import React from 'react'
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

const Gallery = () => {
  return (
      <div>
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
    </div>
  )
}

export default Gallery