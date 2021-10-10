import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
export default function ContactSection() {
    return (
        <section style={{backgroundColor:'#dee2e6'}} className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Ras rmal Djerba">
                l'île aux flamants roses accueille des milliers de touristes qui font la traversée en bateaux pirates en provenance du port de Houmt Souk.

On y apprécie sa plage vierge avec son sable fin blanc. La mer est de couleur très claire de transparente à turquoise.
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
<Carousel
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
</Carousel>

                </div>

                <Form />
            </div>
        </section>
    );
}
