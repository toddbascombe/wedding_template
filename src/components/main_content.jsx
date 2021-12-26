import React from 'react'
import { styled } from '@mui/material/styles';
import Jumbotron from './jumbotron'
import SubHeader from './sub_header';
import LeftContent from './right_image_left_content';
import Paper from '@mui/material/Paper';
import RightContent from './left_image_rigth_content';
import FadeInSection from './fadein';
import Button from '@mui/material/Button';
import {splitarray} from '../util'
import {coverPhotos, allExceptCover} from '../images'
import PasswordDialog from './password_dialog'

const images = splitarray(allExceptCover, allExceptCover.length / 3)
console.log(images)

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, drawerWidth }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const MainContent = (props) =>(
  <>
    <Main open={props.open} id="Main">
       <PasswordDialog/>
       <Jumbotron pics={coverPhotos} />
       <FadeInSection>
         <div>
          <SubHeader title="Our Story" />
          <Paper elevation={3} className="card">
            <LeftContent pics={images[0]}>
              <p>"What Is Love" is a song recorded by Trinidadian-German Eurodance artist Haddaway for his debut album, The Album. The song was released on 8 May 1993 as the album's lead single. It was a massive hit in Europe, becoming a number-one hit in at least 13 countries and reaching number two in Germany, Sweden, and the United Kingdom. Outside Europe, the single was a hit worldwide, reaching number 11 in the United States, number 12 in Australia, number 17 in Canada, and number 48 in New Zealand. The song earned Haddaway two awards at the German 1994 Echo Award, in the categories "Best National Single" and "Best National Dance Single"</p>
              <div className="RSVP">
                <Button size="large" className="btn-RSVP">RSVP</Button>
              </div>
              
            </LeftContent>
          </Paper>
         </div>
        
       </FadeInSection>
       <FadeInSection>
         <div>
          <SubHeader title="Itinerary" />
          <Paper elevation={3} className="card">
            <RightContent pics={images[1]}>
              <p>"What Is Love" is a song recorded by Trinidadian-German Eurodance artist Haddaway for his debut album, The Album. The song was released on 8 May 1993 as the album's lead single. It was a massive hit in Europe, becoming a number-one hit in at least 13 countries and reaching number two in Germany, Sweden, and the United Kingdom. Outside Europe, the single was a hit worldwide, reaching number 11 in the United States, number 12 in Australia, number 17 in Canada, and number 48 in New Zealand. The song earned Haddaway two awards at the German 1994 Echo Award, in the categories "Best National Single" and "Best National Dance Single"</p>
            </RightContent>
          </Paper>
         </div>
       </FadeInSection>
       <FadeInSection>
        <SubHeader title="Location" />
        <Paper elevation={3} className="card">
          <LeftContent pics={images[2]}>
            <p>"What Is Love" is a song recorded by Trinidadian-German Eurodance artist Haddaway for his debut album, The Album. The song was released on 8 May 1993 as the album's lead single. It was a massive hit in Europe, becoming a number-one hit in at least 13 countries and reaching number two in Germany, Sweden, and the United Kingdom. Outside Europe, the single was a hit worldwide, reaching number 11 in the United States, number 12 in Australia, number 17 in Canada, and number 48 in New Zealand. The song earned Haddaway two awards at the German 1994 Echo Award, in the categories "Best National Single" and "Best National Dance Single"</p>
          </LeftContent>
        </Paper>
       </FadeInSection>
       
      </Main>
  </>
)

export default MainContent
