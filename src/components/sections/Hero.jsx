import Container from "../layout/Container";
import Button from "../ui/Button";
import heroBackground from "../../assets/images/heroBackground.png";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <Container>
        <div className="mx-auto w-full text-center md:max-w-xl lg:max-w-4xl">
          <h1 className="font-heading mb-4 text-4xl md:text-6xl font-semibold tracking-tight lg:mb-10 lg:text-8xl">
            Awesome UI Dark Template for Webflow Agency
          </h1>
          <Button variant="purple" text="Get in Touch" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
