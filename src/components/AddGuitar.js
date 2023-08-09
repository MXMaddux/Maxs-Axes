import React from 'react'
import { storeGuitar } from '../utils/http';

const AddGuitar = () => {
    const guitarData = {
      brand: "Fender",
      model: "Stratocaster",
      price: 8999999,
      image: "https://i.ibb.co/QQHsj0J/IMG-4297.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor ex vel erat pretium blandit quis vel elit. Sed hendrerit porta odio, id fringilla magna fermentum eget. Quisque commodo mauris varius lorem tincidunt, lacinia aliquam ligula dictum. Maecenas cursus tellus sed tincidunt tempus. Suspendisse laoreet vel libero sit amet ornare. Suspendisse potenti. Vestibulum sapien elit, dapibus ut gravida vitae, molestie dictum dui. Morbi sed nisl non erat convallis placerat convallis quis ligula."
    }
  return (
    storeGuitar(guitarData)
  )
}

export default AddGuitar