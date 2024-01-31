import { Box, Grid } from '@mui/material'
import Text from './CardsData/Text/Text'
import TextBlock from './CardsData/TextBlock/TextBlock'
import Photo from './CardsData/Photo/Photo'
import { useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import PhotoTimeline from './CardsData/PhotoTimeline/PhotoTimeline'
import Video from './CardsData/Video/Video'
import Story from './CardsData/Story/Story'
import Person from './CardsData/Person/Person'
import PhotoGallery from './CardsData/PhotoGallery/PhotoGallery'
import BackButton from '../../BackButton'
import Socials from './CardsData/Socials/Socials'
import Location from './CardsData/Location/Location'
import WeddingTimeline from './CardsData/WeddingTimeline/WeddingTimeline'
import Activity from './CardsData/Activity/Activity'
import PlaceToStay from './CardsData/PlaceToStay/PlaceToStay'
import Transport from './CardsData/Transport/Transport'
import QnA from './CardsData/QnA/QnA'

const cards = [
  {
    id: 1,
    name: 'text',
    img: '../../../../src/assets/text.svg',
    component: <Text />
  },
  {
    id: 2,
    name: 'textBlock',
    img: '../../../../src/assets/textBlock.svg',
    component: <TextBlock />
  },
  {
    id: 3,
    name: 'photo',
    img: '../../../../src/assets/photo.svg',
    component: <Photo />
  },
  {
    id: 4,
    name: 'video',
    img: '../../../../src/assets/video.svg',
    component: <Video />
  },
  {
    id: 5,
    name: 'photoTimeline',
    img: '../../../../src/assets/photoTimeline.svg',
    component: <PhotoTimeline />
  },
  {
    id: 6,
    name: 'story',
    img: '../../../../src/assets/story.svg',
    component: <Story />
  },
  {
    id: 7,
    name: 'photoGallery',
    img: '../../../../src/assets/photoGallery.svg',
    component: <PhotoGallery />
  },
  {
    id: 8,
    name: 'person',
    img: '../../../../src/assets/person.svg',
    component: <Person />
  },
  {
    id: 9,
    name: 'QnA',
    img: '../../../../src/assets/QnA.svg',
    component: <QnA />
  },
  {
    id: 10,
    name: 'transportation',
    img: '../../../../src/assets/transportation.svg',
    component: <Transport />
  },
  {
    id: 11,
    name: 'placeToStay',
    img: '../../../../src/assets/placeToStay.svg',
    component: <PlaceToStay />
  },
  {
    id: 12,
    name: 'activity',
    img: '../../../../src/assets/activity.svg',
    component: <Activity />

  },
  {
    id: 13,
    name: 'Wedding Day Timeline',
    img: '../../../../src/assets/WeddingTimeline.svg',
    component: <WeddingTimeline />
  },
  {
    id: 14,
    name: 'location',
    img: '../../../../src/assets/Location.svg',
    component: <Location />
  },
  {
    id: 15,
    name: 'Socials',
    img: '../../../../src/assets/Socials.svg',
    component: <Socials />
  },
]

interface CardInterface {
  id: number;
  name: string;
  img: string;
  component?: JSX.Element
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Element = (props: any) => {
  const { setFooterTrue, setFooterFalse } = props
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>(null);

  const handleCardClick = (card: CardInterface) => {
    setSelectedCard(card);
    setFooterTrue()
  };
  return (
    <Box mt={2}>
      {!selectedCard && <Grid container px={3}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={6} onClick={() => handleCardClick(card)}>
            <img src={card.img} alt='cards' style={{ cursor: 'pointer' }} height='118px' />
          </Grid>
        ))}
      </Grid>}
      {selectedCard && <BackButton onClick={() => { setSelectedCard(null); setFooterFalse() }} />}

      {selectedCard && (
        <Box mt={2}>
          {selectedCard.component}
        </Box>
      )}


    </Box>
  )
}

export default Element