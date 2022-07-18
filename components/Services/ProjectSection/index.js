import Projects from '../../../data/projectsData'
import { Section, Container, Title,ProjectsWrapper, ProjectCard, ProjectImage, SubTitle, Line, ProjectSection, TextWrapper} from "./styled.elements";


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
        {Projects.map((project)=>( 
          <ProjectCard key={project.id}>    
            <ProjectImage src={project.src} alt={project.alt} width={450} height={450}/>
          </ProjectCard>
        ))}
        </ProjectsWrapper>
        </ProjectSection>
      </Container>
    </Section>
  );
}

export default index;
