import beachOne from './Assets/beach_1.jpg'
import beachTwo from './Assets/beach_2.jpg'
import beachThreeLarge from './Assets/beach_3-large.jpg'
import beachThree from './Assets/beach_3.jpg'
import beachFour from './Assets/beach_4.jpg'
import beachFive from './Assets/beach_5.jpg'
import brick from './Assets/brick.jpg'
import dinner from './Assets/dinner.jpg'
import jacksonhole from './Assets/jacksonhole.jpg'
import matterhorn from './Assets/matterhorn.jpg'
import milian from './Assets/milian.jpg'
import netflix from './Assets/netflix.png'

export const photos = {
  beachOne: { url: beachOne, description: 'ring on the beach' },
  beachTwo: { url: beachTwo, description: 'close up' },
  beachThreeLarge: { url: beachThreeLarge, description: 'piggy back large' },
  beachThree: { url: beachThree, description: 'piggy back' },
  beachFour: { url: beachFour, description: 'hand holding walk' },
  beachFive: { url: beachFive, description: 'pointing' },
  brick: { url: brick, description: 'scaffolding' },
  dinner: { url: dinner, description: 'engagement dinner' },
  jacksonhole: { url: jacksonhole, description: 'jackson hole' },
  matterhorn: { url: matterhorn, description: 'big mountain' },
  milian: { url: milian, description: 'sky daddy house' },
  netflix: { url: netflix, description: 'we famous' }
}

export const coverPhotos = [photos.brick, photos.beachFive]

export const beachPhotos = [
  photos.beachOne,
  photos.beachTwo,
  photos.beachThreeLarge,
  photos.beachThree,
  photos.beachFour
]

export const otherPhotos = [
  photos.dinner,
  photos.jacksonhole,
  photos.matterhorn,
  photos.milian,
  photos.netflix
]

export const allExceptCover = [...beachPhotos, ...otherPhotos]
