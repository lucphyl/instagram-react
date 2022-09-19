function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.sourceImage} />
      </div>
      <div class="usuario">{props.profileName}</div>
    </div>
  );
}
const stories = [
  { source: 'assets/img/9gag.svg', profile: '9gag' },
  { source: 'assets/img/meowed.svg', profile: 'meowed' },
  { source: 'assets/img/barked.svg', profile: 'barked' },
  {
    source: 'assets/img/nathanwpylestrangeplanet.svg',
    profile: 'nathanwpylestrangeplanet',
  },
  {
    source: 'assets/img/wawawicomics.svg',
    profile: 'wawawicomics',
  },
  {
    source: 'assets/img/respondeai.svg',
    profile: 'respondeai',
  },
  {
    source: 'assets/img/filomoderna.svg',
    profile: 'filomoderna',
  },
  {
    source: 'assets/img/memeriagourmet.svg',
    profile: 'memeriagourmet',
  },
];

export default function Stories() {
  return (
    <div class="stories">
      {stories.map((story) => (
        <Story sourceImage={story.source} profileName={story.profile} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
