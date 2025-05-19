<script setup>
import { useStore } from "@/stores/store.js"
const store = useStore()
</script>

<template>
<h1> Eingaben </h1>

<input type="text" placeholder="Artikel" v-model="store.inputData.artikel">
<input type="number" placeholder="Euro" v-model="store.inputData.euro">
<select name="Kategorie" v-model="store.inputData.kategorie">
    <option></option>
    <option>Lebensmittel</option>
    <option>Haushaltsmittel</option>
    <option>Auto</option>
    <option>Hunde</option>
</select>
<input type="date" v-model="store.inputData.datum">
<br>
<button @click="store.addToList()">Safe</button>
<button @click="store.deleteFromList(store.inputData.index)" v-if="store.inputData.index === 0 || store.inputData.index">Löschen</button>
<button @click="store.cancel()">Abbrechen</button>






</template>

<style>

</style>
