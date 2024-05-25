import Section from "../../Shared/Section/Section";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";

const OurMenu = () => {
  return (
    <>
      <Section>
        <SectionIntro subTitle={`Check it out`} title={"FROM OUR MENU"} />
        <div className="grid grid-cols-1 gap-6 mt-6 md:mt-8 lg:mt-12 lg:grid-cols-2 lg:gap-8"></div>
      </Section>
    </>
  );
};

export default OurMenu;
