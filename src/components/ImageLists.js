import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import cresent from '../pictures/outside/crescent-jetties.jpg'
import fortBraggThree from '../pictures/outside/fort-bragg-three.jpg'
import fortBraggTwo from '../pictures/outside/fort-bragg-two.jpg'
import fortBragg from '../pictures/outside/fort-bragg.jpg'
import lakeIsabella from '../pictures/outside/lakeisabella.jpg'
import moonstone from '../pictures/outside/moonstone.jpg'
import trinidad from '../pictures/outside/trinidad.jpg'
import trinidadTwo from '../pictures/outside/Trinidad1.jpg'
import woffordHeights from '../pictures/outside/woffordheights.jpg'
import humMountains from '../pictures/outside/hum-mountains.jpg'
import carterFire from '../pictures/outside/carter-fire.jpg'

const itemData = [
    {
        img: cresent,
        title:'Crescent Jetties, CA'
    },
    {
        img:fortBragg,
        title:'Fort Bragg, CA'
    },
    {
        img:fortBraggTwo,
        title:'Fort Bragg, CA'
    },
    {
        img:fortBraggThree,
        title:'Fort Bragg, CA'
    },
    {
        img:lakeIsabella,
        title:'Lake Isabella, CA'
    },
    {
        img:moonstone,
        title:'Moonstone Beach, CA'
    },
    {
        img: trinidad,
        title:'Trinidad, CA'
    },
    {
        img: trinidadTwo,
        title:'Trinidad, CA'
    },
    {
        img:woffordHeights,
        title:'Wofford Heights, CA'
    },
    {
        img:humMountains,
        title:'Towards Weaverville, CA'
    },
    {
        img:carterFire,
        title:'Towards Weaverville, CA'
    }
]
const OutsideImages = () => {
    return(
    <Box sx={{ width: 750, height: 500, overflowY: 'scroll'}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    )
}

export { OutsideImages }