function Description() {

    return (
        <div className="bg-[url('assets/hero.svg')] bg-no-repeat bg-cover w-screen h-screen relative">
            <div className="bg-gradient-to-t from-black to-transparent w-screen h-screen"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 px-10">
                <div className="text-white text-justify tracking-widest">
                    <div className="text-9xl inline font-custom">Bonjour!</div>
                    <div className="text-4xl inline leading-loose font-custom2">
                        Dive into a journey of self-discovery with our
                        advance color analysis intelligent system, designed
                        to celebrate your unique beauty. Discover which
                        season reflects your essence and embrace fashion
                        recommendations and lifestyle insights that make you
                        feel truly special.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;