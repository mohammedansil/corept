import Projects from "../../../data/projectsData";
import {
  Section,
  Container,
  Title,
  ProjectsWrapper,
  ProjectCard,
  ProjectImage,
  SubTitle,
  Line,
  ProjectSection,
  TextWrapper,
  ProjectTitle,
  ProjectDesc,
  ProjectTextWrapper,
  ProjectDescTwo,
  ProjectInnerTextWrapper,
  ProjectFloor,
  ProjectSystem,
  ProjectConsultant,
  ProjectStatus,
} from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <ProjectSection>
          <TextWrapper>
            <SubTitle>Our best works</SubTitle>
            <Title>Latest Projects</Title>
            <Line></Line>
          </TextWrapper>
          <ProjectsWrapper>
            {Projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage
                  src={project.Src}
                  alt={project.alt}

                />
                <ProjectTextWrapper>
                  <ProjectTitle>{project.Name}</ProjectTitle>
                  <ProjectInnerTextWrapper>
                    <ProjectSystem><strong>System :<br/></strong>&nbsp;{project.System}</ProjectSystem>
                    <ProjectConsultant><strong>Consultant :<br/></strong>&nbsp;{project.Consultant}</ProjectConsultant>
                    <ProjectFloor><strong>Floors :<br/></strong>&nbsp;{project.Floors}</ProjectFloor>
                    <ProjectStatus><strong>Status :<br/></strong>&nbsp;{project.Status}</ProjectStatus>
                  </ProjectInnerTextWrapper>
                  
                </ProjectTextWrapper>
              </ProjectCard>
            ))}
          </ProjectsWrapper>
        </ProjectSection>
      </Container>
    </Section>
  );
}

export default index;
