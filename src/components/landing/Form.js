import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";

export default function Form() {
    return (
        <div style={{backgroundColor:'#e9ecef'}} className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="black">Press</H3>
                            <Paragraph color="black">
                                On essaiyera  de vous repondre dans le plus proche delais.
                            </Paragraph> 
                            <br />
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>

                            <div >
                            <Card>
                            <a href='https://lapresse.tn/102545/fin-de-tournage-de-le-toucher-de-moez-kamoun-un-film-qui-fouille-la-psychologie-de-ses-personnages/'>
            <CardImage
            
                src="https://i1.wp.com/lapresse.tn/wp-content/uploads/2021/07/moez-kamoun.jpg?fit=850%2C491&ssl=1"
                alt="Card Image"
            /></a>

            <CardBody>
                <H6 color="gray">Card Title</H6>
                <Paragraph color="gray">
                Moëz Kamoun vient de mettre fin à son cinquième long métrage de fiction «Le toucher» avec pour tête d’affiche Emna Kouki, Hamza Negi et Ahmed Ferchichi. Il nous en parle.
Il s’agit d’un drame social dont la durée est de 87 minutes . Il a été tourné en 2021 en Tunisie . Pour résumer, c’est l’histoire d’une infirmière et d’un brancardier qui a mal tourné , ce qui a conduit la mère de l’infirmière à la marier à un non-voyant pour faire taire les mauvaises langues , mais son passé la rattrape toujours.
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button  style={{backgroundColor:'black'}} size="lg" ripple="light" href="#https://lapresse.tn/102545/fin-de-tournage-de-le-toucher-de-moez-kamoun-un-film-qui-fouille-la-psychologie-de-ses-personnages/">
                        See More
                </Button>
            </CardFooter>
        </Card>
<div  >
                             
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLeJ1jSxfqFNSSBx0DYybxDvo6fJ56IkLog&usqp=CAU"  width="1000px" /> */}
                                </div>
                            </div>

                            {/* <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    color="lightBlue"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    color="lightBlue"
                                />
                            </div> */}

                            {/* <Textarea color="lightBlue" placeholder="Message" /> */}

                            {/* <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light">
                                    Envoyer
                                </Button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
