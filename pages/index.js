import { StyledHeadlines } from "@/components/Headline.styled";
import Link from "next/link";
import AnimatedFox from "@/components/AnimatedFox/AnimatedFox";
import {
  Space,
  StyledLink,
  StyledMain,
  StyledTitle,
  StyledWelcome,
} from "@/components/WelcomePage.styled";
import { StyledButton } from "@/components/WelcomePage.styled";

export default function HomePage() {
  return (
    <StyledMain>
      <Space />
      <StyledWelcome>Willkommen </StyledWelcome>
      <StyledTitle>bei SchlauFuchs!</StyledTitle>

      <AnimatedFox />
      <StyledHeadlines>Die schlaue Art zu lernen!</StyledHeadlines>
      <nav>
        <StyledButton>
          <StyledLink href="/howToUse">
            Wie funktioniert <br />
            die App?
          </StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink href="/collections">
            Gleich loslegen <br />
            und lernen!
          </StyledLink>
        </StyledButton>
      </nav>
    </StyledMain>
  );
}

HomePage.getInitialProps = () => {
  const disableLayout = true;
  return { disableLayout };
};
