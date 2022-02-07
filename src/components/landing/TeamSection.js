import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/téléchargement.jfif';
import Image4 from 'assets/img/team-4-470x470.png';
import Image5 from 'assets/img/Mackenzie-Foy.jpg';
import img6 from 'assets/img/img6.jpg';
 import Image7 from 'assets/img/Image7.jpg';
 import Image8 from 'assets/img/image8.jpg';
 import Background from '../../wetransfer_bande_annonce_le_toucher-mp4_2022-02-04_1835/Background.png'

// import Image5 from 'assets/img/Mackenzie-Foy.jpg';
export default function TeamSection() {
    return (
        <section style={{ backgroundImage: `url(${Background})`, }} className="pt-20 pb-48">
            <div  className="container max-w-7xl mx-auto px-4">
                <Title heading="Le Toucher Cast">
                    


                </Title>
                <div className="flex flex-wrap">
                    {/* <TeamCard
                        img={Image1}
                        name="Moez Kamoun"
                        position="Producteur "
                    /> */}
                   
                    <TeamCard
                        img={Image4}
                        name="Emna Kouki"
                        position="Actrice"
                    />
                            <TeamCard
                        img={Image7}
                        name="Rabeb Srairi"
                        position="Actrice"
                    />
                         <TeamCard
                        img={Image2}
                        name="Lotfi Bondka"
                        position="Acteur"
                    />
                    <TeamCard
                        img={Image3}
                        name="wahida Dridi"
                        position="Actrice"
                    />
                        
                        
                           {/* <TeamCard
                        img={Image7}
                        name="Rabeb Srairi"
                        position="Actrice"
                    /> */}
                           {/* <TeamCard
                        img={Image8}
                        name="Hans Zimmer"
                        position="Compositeur de musique de film"
                    /> */} <br />
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <TeamCard
                        img={img6}
                        name="Hamza Neji"
                        position="Acteur"
                    />
                       <TeamCard
                        img={Image5} 
                        name="Ahmed Ferchichi"
                        position="Acteur"
                    /></div>
                </div>
            </div>
        </section>
    );
}
