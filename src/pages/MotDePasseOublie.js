import {
  Container,
  Card,
  Title,
  Input,
  Button,
  LinkWrapper,
  YellowLink,
} from "./StyledComponents";
export default function MotDePasseOublie() {
  return (
<Container>
    <Card>
        <Title>Mot de passe oublie?</Title>
        <form>
          <p>Entrez votre adresse e-mail ci-dessous et nous vous 
            envoyons des instructions sur la façon de modifier votre mot de passe.
          </p>
          <Input type="email" placeholder="E-mail" />
          <Button type="submit">Envoyer</Button>
          </form>
        <LinkWrapper>
          <p>
            Revenir a la <YellowLink to="/login">Connexion</YellowLink>
          </p>
        </LinkWrapper>
    </Card>
</Container>
    );
}