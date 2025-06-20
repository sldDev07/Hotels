import { FiBell, FiLogOut , FiSearch } from "react-icons/fi";
import { FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { PiMonitorBold } from "react-icons/pi";


import{
  Container,
  Sidebar,
  SidebarTop,
  SidebarItem,
  SidebarBottom,
  OnlineDot,
  Content,
  Header,
  SearchInput,
  TopRight,
  Main,
}from"./StyleDashboard";

import{
  TitleRow,
  Title,
  CreateButton,
  Grid,
  Card,
  CardImage,
  CardContent,
}from"./StylesHotels";



const hotels = [
  {
    name: 'Hôtel Terrou-Bi',
    location: 'Boulevard Martin Luther King Dakar, 11500',
    price: '25.000 XOF par nuit',
    image: '/images/terroubi.jpg',
  },
  {
    name: 'King Fahd Palace',
    location: 'Rte des Almadies, Dakar',
    price: '20.000 XOF par nuit',
    image: '/images/kingfahd.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    location: 'Rte de la Corniche Ouest, Dakar 16868',
    price: '22.000 XOF par nuit',
    image: '/images/radisson.jpg',
  },
  {
    name: 'Pullman Dakar Teranga',
    location: 'Place de l’Indépendance, 10 Rue PL 29, Dakar',
    price: '30.000 XOF par nuit',
    image: '/images/pullman.jpg',
  },
  {
    name: 'Hôtel Lac Rose',
    location: 'Lac Rose, Dakar',
    price: '25.000 XOF par nuit',
    image: '/images/lacrose.jpg',
  },
  {
    name: 'Hôtel Saly',
    location: 'Mbour, Sénégal',
    price: '20.000 XOF par nuit',
    image: '/images/saly.jpg',
  },
  {
    name: 'Palm Beach Resort & Spa',
    location: 'BP64, Saly 23000',
    price: '22.000 XOF par nuit',
    image: '/images/palmbeach.jpg',
  },
];




export default function ListeHotels() {
  return (
    <Container>
      <Sidebar>
        <SidebarTop>
          <SidebarItem style={{ background: '#1c1c1c', fontWeight: 'bold' }}>RED PRODUCT</SidebarItem>
          <SidebarItem><MdDashboard/><Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link></SidebarItem>
          <SidebarItem active><PiMonitorBold/> Liste des hôtels</SidebarItem>
        </SidebarTop>
        <SidebarBottom>
          <FaUserCircle size={24} />
          <div>
            Inconue<br/>
          en ligne  <OnlineDot />
          </div>
        </SidebarBottom>
      </Sidebar>
      <Content>
        <Header>
          <div>Liste des hôtels</div>
          <TopRight>
            <FiSearch />
            <SearchInput placeholder="Recherche" />
            <FiBell />
            <FaUserCircle size={24} />
             <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}><FiLogOut size={20}/></Link>
          </TopRight>
        </Header>
        <Main>
          <TitleRow>
            <Title>Hôtels ({hotels.length})</Title>
            <CreateButton>
              <FaPlus /> <Link to="/ajouterhotel" style={{ color: 'black', textDecoration: 'none' }}>Créer un nouveau hôtel</Link>
            </CreateButton>
          </TitleRow>
          <Grid>
            {hotels.map((hotel, index) => (
              <Card key={index}>
                <CardImage src={hotel.image} alt={hotel.name} />
                <CardContent>
                  <p>{hotel.location}</p>
                  <h3>{hotel.name}</h3>
                  <p>{hotel.price}</p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Main>
      </Content>
    </Container>
  );
}
