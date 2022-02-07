import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Background from '../../wetransfer_bande_annonce_le_toucher-mp4_2022-02-04_1835/Background.png'
import {
  Grid,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_GRID":
      return {
        ...state,
        toggleGrid: true
      };
    case "CLOSE_GRID":
      return {
        ...state,
        toggleGrid: false
      };
  }
};
export default function ContactSection() {

  
  const [state, dispatch] = React.useReducer(reducer, {
    toggleModal: false,
    toggleBody: false,
    toggleSmall: false,
    toggleGrid: false,
    toggleLarge: false,
    toggleInputModal: false
  });
    return (
        <section style={{ backgroundImage: `url(${Background})`,}}  className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
           <Title heading="Calendrier Projection  "> 
              Lorum ipiduidm didamd lorum ipdutm liopsls uidm didamd lorum ipdutm liopsls
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    {/* <ContactCard icon="stars" title="Excelent Services">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Grow Your Market">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard> */}
                      <Card>
                        <a href='https://lapresse.tn/102545/fin-de-tournage-de-le-toucher-de-moez-kamoun-un-film-qui-fouille-la-psychologie-de-ses-personnages/'>
            <CardImage
            
                src="https://i1.wp.com/lapresse.tn/wp-content/uploads/2021/07/moez-kamoun.jpg?fit=850%2C491&ssl=1"
                alt="Card Image"
            /></a>

            <CardBody>
                <H6 color="gray">Last News</H6>
                <Paragraph color="gray">
                Moëz Kamoun vient de mettre fin à son cinquième long métrage de fiction «Le toucher» avec pour tête d’affiche Emna Kouki, Hamza Negi et Ahmed Ferchichi. Il nous en parle.
Il s’agit d’un drame social dont la durée est de 87 minutes . Il a été tourné en 2021 en Tunisie . Pour résumer, c’est l’histoire d’une infirmière et d’un brancardier qui a mal tourné , ce qui a conduit la mère de l’infirmière à la marier à un non-voyant pour faire taire les mauvaises langues , mais son passé la rattrape toujours.
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button style={{backgroundColor:'black'}} size="lg" 
                  onClick={() => dispatch({ type: "OPEN_GRID" })}
                  >
                    Show More
                </Button>
            </CardFooter>
        </Card>
{/* <Carousel
  plugins={[
    'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2
      }
    },
  ]}
>
  <img src={"https://media.routard.com/image/96/6/photo.1550966.jpg"} />
  <img src={"https://media-cdn.tripadvisor.com/media/photo-s/16/bc/c1/34/plage-djerba-ras-el-rmal.jpg"} />
  <img src={"http://www.wepostmag.com/wp-content/uploads/2017/07/55950658b7882-Product-399-20140512-013300jpg.jpg"} />
  <img src={"https://www.djerbatourisme.com/djerba/images/stories/Activites/bateau_pirate/Excursion_Djerba_Bateau_Pirate_24.JPG"} />
  <img src={"https://www.tunisiepromo.com/wp-content/uploads/2018/09/djerba.jpg"} />
  <img src={" https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/244964558_675422463432305_4556649830495440205_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=JuEAXRZds98AX_LN5FO&tn=1PdByQbleRA1Su3Q&_nc_ht=scontent.ftun10-1.fna&oh=113aa5cf975be44adadc6146c315ec32&oe=6188F5E5"} width="300px" height="200px" />
  <img src={"https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/244649837_847607862624781_1884174130146792058_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=jvZ9sDzZdvEAX_fu-Vr&tn=1PdByQbleRA1Su3Q&_nc_ht=scontent.ftun10-1.fna&oh=e8eb990c2d35758941f8245b3a049bb0&oe=6188D1E4"} width="300px" height="200px"  />
</Carousel> */}

           
                </div>
              {/* <Form /> */}
            </div>
            <Dialog style= {{backgroundColor:'black'}}
        fullWidth={true}
        maxWidth={"lg"}
        open={state.toggleGrid}
        onClose={() => dispatch({ type: "CLOSE_GRID" })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent >
          <DialogContentText style= {{display:'flex',justifyContent:'center', }}
            id="alert-dialog-description"
            component={"div"}
          >
            {/* marginLeft:"30%" */}
            <ReactPlayer  
            width="100%" url='https://www.youtube.com/watch?v=0evQ-LRm3cs' />

          </DialogContentText>
        </DialogContent>

        <DialogActions>
   
          <Button
            onClick={() => dispatch({ type: "CLOSE_GRID" })}
            color="danger"
          >
            Fermer
          </Button>

        </DialogActions>
      </Dialog>
        </section>
    );
}
