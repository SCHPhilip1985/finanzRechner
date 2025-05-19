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
    <label for="Lebensmittel">Lebensmittel</label> <input type="checkbox" v-model="store.selecter.Lebensmittel">
    <label for="Haushaltsmittel">Haushaltsmittel</label>  <input type="checkbox" v-model="store.selecter.Haushaltsmittel">
    <label for="Auto">Auto</label>  <input type="checkbox" v-model="store.selecter.Auto">
    <label for="Hunde">Hunde</label>  <input type="checkbox" v-model="store.selecter.Hunde">
      {{ store.selecter }}
    </section>
  


<section v-for="(listItem, index) in  store.outputData"> 
  <div class="listItems" v-if="store.selecter[listItem.kategorie] === true">
    <div class="artikel">{{ listItem.artikel }}</div>
    <div class="euro">{{ listItem.euro }}</div>
    <div class="kategorie">{{ listItem.kategorie }}</div>
    <div class="datum">{{ listItem.datum }}</div>
    
    <div class="btn">
      <button @click="store.editEntry(index)">Ändern</button>
      <button @click="store.deleteFromList(index)">Löschen</button>
    </div>

  </div>


</section>

Euro Gesamtsumme {{ store.sum }} <br>
Haushaltsmittel {{ store.sumHaushaltsmittel }} <br>
Lebensmittel {{ store.sumLebensmittel }}
<hr>
{{ store.outputData }}
  </main>
</template>

<style scoped>
/* .listHeader {
  display: grid;
  grid-template: "Artikel Euro Kategorie Datum" / 130px 1fr 1fr 1fr 1fr 1fr 90px 90px;
  margin: 10px 0;
  border: 2px solid red;
} */

.listItems {
  place-self: center;
  transition: all 2s;
  display: grid;
  grid-template: "Artikel Euro Kategorie Datum" 90px / 90px 1fr 1fr 1fr 1fr 1fr 90px 90px;
  border: 0.5px solid blue;
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
  padding: 10px;
}

.btn {
  display: flex;
  justify-content: right;
  padding: 10px;
  margin: 10px;
}

</style>
