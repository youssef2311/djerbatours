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
        <div style={{backgroundColor:'#a4133c'}} className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">OVERVIEW</H3>
                            <Paragraph color="gray">
                                On essaiyera  de vous repondre dans le plus proche delais.
                            </Paragraph>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>

                            <div >
                            <Card>
            <CardImage
                src="https://www.expressandstar.com/resizer/6xCaXPpf88gLdtS3VKtumOSuyRQ=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/ZBZ5T324ARGVZBDWRI5SS3KBNM.jpg"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Card Title</H6>
                <Paragraph color="gray">
                    Don't be scared of the truth because we need to restart the human
                    foundation in truth And I love you like Kanye loves Kanye I love
                    Rick Owens’ bed design but the back is...
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="red" size="lg" ripple="light">
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
