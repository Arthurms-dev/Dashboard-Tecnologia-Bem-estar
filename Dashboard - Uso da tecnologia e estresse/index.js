fetch("https://parseapi.back4app.com/classes/Diario", {
  method: "POST",
  headers: {
    "X-Parse-Application-Id": "kFSZuJeMP4YC62Mc7rmekv0Y9sZlPA2w8j14wCdF",
    "X-Parse-REST-API-Key": "BGhAlHu8kdlAWMBxg3IBGuKJ9h36XzbtCzm4e2nR",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    emotion: "Feliz",
    description: "Dia tranquilo e produtivo.",
    date: new Date().toISOString()
  })
})
.then(response => response.json())
.then(data => console.log("Registro criado:", data))
.catch(error => console.error("Erro ao salvar:", error));

 async function buscarConselho() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const dados = await resposta.json();
    document.getElementById("conselho").innerText = `"${dados.slip.advice}"`;
  } catch (erro) {
    document.getElementById("conselho").innerText = "Não foi possível carregar o conselho.";
  }
}

buscarConselho();

    document.getElementById('formEstresse').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Teste enviado! Resultado será analisado.');
    });


    document.getElementById('formDiario').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Emoção registrada com sucesso!');
    });
    
  
  Parse.initialize('kFSZuJeMP4YC62Mc7rmekv0Y9sZlPA2w8j14wCdF', 'BGhAlHu8kdlAWMBxg3IBGuKJ9h36XzbtCzm4e2nR');
  Parse.serverURL = "https://parseapi.back4app.com/";

  document.getElementById('formDiario').addEventListener('submit', function(e) {
    e.preventDefault();
    const emocao = document.getElementById('emocao').value;

    const Diario = Parse.Object.extend("Diario");
    const entrada = new Diario();
    entrada.set("emocao", emocao);

    entrada.save().then(() => {
      alert("Emoção registrada no Back4App!");
    }, );
  });

  const ctx = document.getElementById('graficoEmocoes').getContext('2d');
  const graficoEmocoes = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Triste', 'Animado', 'Ansioso', 'Calmo'],
      datasets: [{
        label: 'Emoções registradas',
        data: [5, 8, 3, 4], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });