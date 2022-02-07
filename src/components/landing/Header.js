import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import Affiche_Le_Toucher from '../../wetransfer_bande_annonce_le_toucher-mp4_2022-02-04_1835/Affiche_Le_Toucher.jpg'
export default function Header() {
    return (
        <div  style={{ backgroundImage: `url(${Affiche_Le_Toucher})`,    }}    className="static pt-16 pb-32 flex content-center items-center justify-center h-screen" >
             {/* className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen" */}
            <div
             className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full"
             />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Le Toucher .</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                              Au Cinéma à partir du 23 Février.
                            </LeadText>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
