import { useState } from 'react';
import { FaArrowLeft, FaRegImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import{
  FormWrapper,
  BackLink,
  Title,
  Row,
  Input,
  Select,
  UploadBox,
  SubmitButton
}from"./StyleAjoutHotels";

export default function AjouterHotelForm() {
  const [form, setForm] = useState({
    nom: '',
    adresse: '',
    email: '',
    telephone: '',
    prix: '',
    devise: 'F XOF',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    setForm(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Hôtel enregistré !');
  };

  return (
    <FormWrapper>
      <BackLink><Link to="/listehotels" style={{ color: 'black', textDecoration: 'none' }}><FaArrowLeft /></Link> CRÉER UN NOUVEAU HÔTEL</BackLink>
      <Title>Créer un nouveau hôtel</Title>
      <form onSubmit={handleSubmit}>
        <Row>
          <Input
            name="nom"
            placeholder="Nom de l'hôtel"
            value={form.nom}
            onChange={handleChange}
          />
          <Input
            name="adresse"
            placeholder="Adresse"
            value={form.adresse}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Input
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="telephone"
            placeholder="Numéro de téléphone"
            value={form.telephone}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Input
            name="prix"
            placeholder="Prix par nuit"
            value={form.prix}
            onChange={handleChange}
          />
          <Select
            name="devise"
            value={form.devise}
            onChange={handleChange}
          >
            <option value="F XOF">F XOF</option>
            <option value="€">Euro</option>
            <option value="$">Dollar</option>
          </Select>
        </Row>
        <div style={{ marginBottom: '1rem' }}>
          <label>Ajouter une photo</label>
          <UploadBox>
            <FaRegImage />
            Ajouter une photo
            <input type="file" accept="image/*" onChange={handleFile} />
          </UploadBox>
        </div>
        <SubmitButton type="submit">Enregistrer</SubmitButton>
      </form>
    </FormWrapper>
  );
}
