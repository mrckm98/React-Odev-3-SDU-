import "./App.css";
import React from "react";

function Arama(props) {
  function handleChange(event) {
    setAramaMetni(event.target.value);
    props.onSearch(event);
  }

  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={props.onSearch}
        value={props.aramaMetni}
      />
    </div>
  );
}
function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 18,
      puan: 4,
      id: 0,
    },
    {
      baslik: "C# Dersleri",
      url: "wwww.google.com.tr",
      yazar: "Murat Yucedag",
      yorum_sayisi: 3,
      puan: 4,
      id: 1,
    },
    {
      baslik: "Java Dersleri",
      url: "wwww.google.com.tr",
      yazar: "Michael Scofield",
      yorum_sayisi: 14,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Node Dersleri",
      url: "wwww.google.com.tr",
      yazar: "Agah Beyoglu",
      yorum_sayisi: 41,
      puan: 5,
      id: 3,
    },
    {
      baslik: "CSS for dummies",
      url: "wwww.google.com.tr",
      yazar: "Nevra Elmas",
      yorum_sayisi: 1,
      puan: 5,
      id: 4,
    },
  ];

  const searchText = yaziListesi.filter((text) => {
    const baslik = text.baslik.toLowerCase();
    const yazar = text.yazar.toLowerCase();
    if(yazar.includes(aramaMetni.toLowerCase())){
      return yazar.includes(aramaMetni.toLowerCase())
    }else{
      return baslik.includes(aramaMetni.toLowerCase())
    }
  });

  function handleSearch(e) {
    setAramaMetni(e.target.value);
  }

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama onSearch={handleSearch} />
      <hr />
      <Liste yazilar={searchText} />
    </div>
  );
}
export default App;
