const Welcome = () => {
    return (
        <div className="flex w-full justify-center items.center">
            <div className="flex mf:flex-row flex-col  items-start justify-between p-5 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Send Crypto <br /> across the globe
                    </h1>
                    <p className="text-left mt-5  text-white font-light  text-base">
                        Save gas by transferring multiple payments at once
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
