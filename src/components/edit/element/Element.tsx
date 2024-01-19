import { Box,  Grid } from '@mui/material'
import Text from './CardsData/Text'
import TextBlock from './CardsData/TextBlock'
import Photo from './CardsData/Photo'
import { SetStateAction, useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import PhotoTimeline from './CardsData/PhotoTimeline'
import Video from './CardsData/Video'
import Story from './CardsData/Story'
import PhotoGallery from './CardsData/PhotoGallery'



const cards = [
  {
    id: 1,
    name:'text',
    img: '../../../../src/assets/text.svg',
    component: <Text />
  },
  {
    id: 2,
    name:'textBlock',
    img: '../../../../src/assets/textBlock.svg',
    component: <TextBlock />
  },
  {
    id: 3,
    name:'photo',
    img: '../../../../src/assets/photo.svg',
    component:<Photo />
  },
  {
    id: 4,
    name:'video',
    img: '../../../../src/assets/video.svg',
    component: <Video />
  },
  {
    id: 5,
    name:'photoTimeline',
    img: '../../../../src/assets/photoTimeline.svg',
    component: <PhotoTimeline />
  },
  {
    id: 6,
    name:'story',
    img: '../../../../src/assets/story.svg',
    component:<Story />
  },
  {
    id: 7,
    name:'photoGallery',
    img: '../../../../src/assets/photoGallery.svg',
    component: <PhotoGallery />
  },
  {
    id: 8,
    name:'person',
    img: '../../../../src/assets/person.svg',
    
  },
  {
    id: 9,
    name:'QnA',
    img:'../../../../src/assets/QnA.svg'
  },
  {
    id: 10,
    name:'transportation',
    img:'../../../../src/assets/transportation.svg'
  },
  {
    id: 11,
    name:'placeToStay',
    img:'../../../../src/assets/placeToStay.svg'
  },
  {
    id: 12,
    name:'activity',
    img:'../../../../src/assets/activity.svg'
  },
]
const Element = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card: { id: number; name: string; img: string; component: JSX.Element } | { id: number; name: string; img: string; component?: undefined } | SetStateAction<null>) => {
    setSelectedCard(card);
  };
  return (
    <Box mt={2}>
      <Grid container px={3}>
        {cards.map((card, i) => (
          <Grid item key={card.id} xs={6} onClick={() => handleCardClick(card)}>
            <img src={card.img} alt='cards' style={{ cursor: 'pointer' }} height='118px' />
          </Grid>
        ))}
      </Grid>

      {selectedCard && (
        <Box mt={2}>
          {selectedCard.component}
        </Box>
      )}
    </Box>
  )
}

export default Element