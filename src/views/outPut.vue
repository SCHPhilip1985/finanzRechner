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
  <div class="datum">{{ listItem.datum }}</div>

  <button @click="store.editEntry(index)">Ändern</button>
  <button @click="store.deleteFromList(index)">Löschen</button>

</section>
{{ store.sum }}
{{ store.sumHaushaltsmittel }}
{{ store.sumLebensmittel }}
<hr>
{{ store.outputData }}
  </main>
</template>

<style scoped>
.listHeader {
  display: grid;
  grid-template: "Artikel Euro Kategorie Datum" / 130px 1fr 1fr 1fr 1fr 1fr 90px 90px;
  margin: 10px 0;
}

.listItems {
  place-self: center;
  transition: all 2s;
  display: grid;
  grid-template: "Artikel Euro Kategorie Datum" 90px / 90px 1fr 1fr 1fr 1fr 1fr 90px 90px;
}

.artikel {
  grid-area: Artikel;
  place-self: center;
}

.euro {
  grid-area: Euro;
  place-self: center;
}

.kategorie {
  grid-area: Kategorie;
  place-self: center;
}

.datum {
  grid-area: Datum;
  place-self: center;
}

</style>
