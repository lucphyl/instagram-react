import React from 'react';

export default function Post({
  sourceProfile,
  nameProfile,
  mediaType,
  media,
  mainLikedSource,
  qtdLikes,
  mainLiked,
  liked,
}) {
  const [isLiked, setIsliked] = React.useState(liked);

  function likePost() {
    setIsliked(!isLiked);
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={sourceProfile} />
          {nameProfile}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        {mediaType === 'image' ? (
          <img src={media} onClick={() => setIsliked(true)} />
        ) : (
          <video onClick={likePost} autoPlay muted loop controls>
            <source src={media} type="video/mp4"></source>
          </video>
        )}
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {isLiked ? (
              <ion-icon
                name="heart"
                class="liked"
                onClick={likePost}
              ></ion-icon>
            ) : (
              <ion-icon name="heart-outline" onClick={likePost}></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={mainLikedSource} />
          <div class="texto">
            Curtido por <strong>{mainLiked}</strong> e{' '}
            <strong>outras {qtdLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
