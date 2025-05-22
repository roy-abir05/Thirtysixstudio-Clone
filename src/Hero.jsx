const Hero = () => {
  return (
    <div className="text-foreground w-screen mt-[50px]">
        <div className="mb-[250px] px-[400px] w-full flex items-center justify-around">
            <div id="left" className="w-[400px] h-[300px] flex flex-col items-start justify-between text-left">
                <div className="text-3xl">At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</div>
                <div className="tracking-tighter">We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</div>
                <div>Scroll</div>
            </div>
            <div id="right rotating text" className="">THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION — </div>
        </div>
        <div id="heading" className="w-full h-[200px] flex items-center justify-center text-[15vw] leading-none">Thirtysixstudio</div>
    </div>
  )
}
export default Hero