import { HeaderContainer } from "../containers/header";
import { FaqContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { Feature, CtaForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <CtaForm>
            <CtaForm.Text>Ready to watch? Enter your email to create or restart your membership.</CtaForm.Text>
            <CtaForm.Break />
            <CtaForm.Input placeholder="Email address" />
            <CtaForm.Button>Get Started</CtaForm.Button>
          </CtaForm>
        </Feature>
      </HeaderContainer>
      
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  )
}