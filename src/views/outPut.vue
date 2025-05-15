<script setup>
import { useStore } from "@/stores/store.js";
const store = useStore()
</script>

<template>
  <main>
    <h1>Finanzliste</h1>

    <section class="listHeader">
      <div class="artikel">Artikel</div>
      <div class="euro">Euro</div>
      <div class="kategorie">Kategorie</div>
    </section>
  


<section class="listItems" v-for="(listItem, index) in  store.outputData"> 
  <div class="artikel">{{ listItem.artikel }}</div>
  <div class="euro">{{ listItem.euro }}</div>
  <div class="kategorie">{{ listItem.kategorie }}</div>

  <button>Ändern</button>
  <button>Löschen</button>
</section>
  </main>
</template>

<style scoped>
.listHeader {
  display: grid;
  grid-template: "Artikel Euro Kategorie" / 60px 1fr 1fr 1fr 1fr 1fr 90px 90px;
  margin: 10px 0;
}
</style>
