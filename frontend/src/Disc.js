export const Disc = () =>{
    return(
        <div>
            <div className="h-screen w-screen flex justify-center bg-black">
                <h1 className="text-red-600 bg-black text-9xl  absolute top-20">Disclaimer</h1>
                <h2 className="bg-black text-white text-6xl absolute top-80 flex items-center justify-center ">Данный сайт создан в юмористических целях.Все сделанное нами является нашим полетом фантазии.
                Все совпадения с реальностью случайны.</h2>
                <a href='/main' className="but3 h-20 w-96 flex justify-center items-center absolute top-3/4 text-white bg-yellow-500 rounded text-5xl  hover:bg-yellow-700">Next</a>
            </div>
        </div>
    );
}