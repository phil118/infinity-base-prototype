<template>

    <!-- if show background -->
    <div v-if="settings.fullScreenBackground" class="fullscreen-background" >
      <!-- should make this fade in with page load on none editor site -->
      <!-- serve up better responsive images/media src-set -->
      <img v-if="styles.backgroundImage" :src="styles.backgroundImage"  />
      <div class="fullscreen-background-colour"></div>
    </div>

    <div class="content">

      <!-- if not show background and not col aligned left -->
      <div v-if="!settings.fullScreenBackground && styles.blockAlignment !== 'start'" class="column-background" >
        <img v-if="styles.backgroundImage" :src="styles.backgroundImage" />
        <div class="fullscreen-background-colour"></div>
      </div>

      <div class="content-column">

        <div class="content-row">

          <!-- if show media preview -->
          <div v-if="settings.showMediaPreview" class="image-container" >
            <img :src="nft.image" :alt="nft.title" id="nft-preview" />
          </div>

          <div class="text-container">

            <h1 class="title" id="nft-title">{{nft.title}}</h1>
            <h2 class="heading" id="nft-creator">{{nft.creator}}</h2>

            <!-- if show summary -->
            <pre v-if="settings.showSummary" class="text" id="nft-summary" >
              {{nft.summary}}
            </pre>

            <!-- if show owner -->
            <h3 v-if="settings.showOwner && settings.owner != ''" class="heading" id="nft-owner-heading" >Owned By</h3>
            <p v-if="settings.showOwner" class="text" id="nft-owner" >{{settings.owner}}</p>

          </div>

        </div>

      </div>

      <!-- if not show background and not col aligned right -->
      <div v-if="!settings.fullScreenBackground && styles.blockAlignment !== 'end'" class="column-background" >
        <img v-if="styles.backgroundImage" :src="styles.backgroundImage" />
        <div class="fullscreen-background-colour"></div>
      </div>

    </div>

</template>

<script>

export default {
  name: "MainLayout",
  props: {
    nft: {
      type: Object
    },
    settings: {
      type: Object
    },
    styles: {
      type: Object
    },
  }
};
</script>