import ImageCal from '@components/Image-calculator';
const Home = () => {
    return (
        <div className='flex flex-col justify-evenly'>
            <h1 className='text-center mb-10 mt-16 text-5xl'>
                Ratio Calculator by{' '}
                <a className='text-blue-500 hover:text-blue-400' href='https://github.com/Wen19970509/calculator.git' target='_blank' rel='noreferrer noopener'>
                    Wen-Chen
                </a>
            </h1>
            <ImageCal />
        </div>
    );
};

export default Home;
