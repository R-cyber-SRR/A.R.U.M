import React, { useState } from 'react';

function App() {
  const [productImage, setProductImage] = useState(null);
  const [offerDetails, setOfferDetails] = useState('');
  const [colorPalette, setColorPalette] = useState('');
  const [theme, setTheme] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('productImage', productImage);
    formData.append('offerDetails', offerDetails);
    formData.append('colorPalette', colorPalette);
    formData.append('theme', theme);

    const response = await fetch('http://localhost:5000/generate', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.resultUrl);
  };

  return (
    <div className="App">
      <h1>AI-Powered Marketing Content Generator</h1>
      <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
      <input type="text" placeholder="Offer Details" onChange={(e) => setOfferDetails(e.target.value)} />
      <input type="text" placeholder="Color Palette" onChange={(e) => setColorPalette(e.target.value)} />
      <input type="text" placeholder="Theme" onChange={(e) => setTheme(e.target.value)} />
      <button onClick={handleSubmit}>Generate</button>
      {result && <img src={result} alt="Generated Banner" />}
    </div>
  );
}

export default App;
