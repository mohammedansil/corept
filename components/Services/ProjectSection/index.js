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
                  src={project.src}
                  alt={project.alt}
                  width={450}
                  height={450}
                />
                <ProjectTextWrapper>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDesc><strong>Details :</strong>&nbsp;{project.description}</ProjectDesc>
                  <ProjectDescTwo><strong>Consultant :</strong>&nbsp;{project.consultant}</ProjectDescTwo>
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
