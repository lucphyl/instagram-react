import React from 'react';

function Recommendation() {
  const [status, setStatus] = React.useState('Seguir');

  return (
    <div class="sugestao">
      <div class="usuario">
        <img src="assets/img/bad.vibes.memes.svg" />
        <div class="texto">
          <div class="nome">bad.vibes.memes</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir" onClick={() => setStatus('Seguindo')}>
        {status}
      </div>
    </div>
  );
}

const recommendations = [
  {
    source: 'assets/img/bad.vibes.memes.svg',
    name: 'bad.vibes.memes',
    reason: 'Segue você',
  },
  {
    source: 'assets/img/bad.vibes.memes.svg',
    name: 'bad.vibes.memes',
    reason: 'Segue você',
  },
];

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {recommendations.map((value) => (
          <Recommendation
            source={value.source}
            reason={value.reason}
            name={value.name}
          />
        ))}

        <div class="sugestao">
          <div class="usuario">
            <img src="assets/img/chibirdart.svg" />
            <div class="texto">
              <div class="nome">chibirdart</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="assets/img/razoesparaacreditar.svg" />
            <div class="texto">
              <div class="nome">razoesparaacreditar</div>
              <div class="razao">Novo no Instagram</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="assets/img/adorable_animals.svg" />
            <div class="texto">
              <div class="nome">adorable_animals</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="assets/img/smallcutecats.svg" />
            <div class="texto">
              <div class="nome">smallcutecats</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
