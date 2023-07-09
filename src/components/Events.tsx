import Image from 'next/image';

const events = [
    {
        title: "vVOE Gramd Opening Tour",
        description: "",
        image:"",
        alt:""
    },
];

export function Events() {
    return (
        <div className='volotea-background' id='events'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <h2 className='text-4xl font-bold'>Our Evets</h2>
                <p className='pt-6 pb-6 max-w-2xl text-center m-auto'>Join us in our events</p>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16'>
                {events.map(({ title, description, image, alt }) => (
                    <div key={title}>
                        <div className='h-32 w32 flex justify-center mx-auto'>
                            <Image src={image} width={130} height={130} quality={90} sizes='100vh' priority alt={alt} />
                        </div>
                        <h2 className='font-bold text-lg text-center'>{title}</h2>
                        <p className='pt-2 text-center'>{description}</p>
                        </div>
                ))}
            </div>
        </div>
    );
}