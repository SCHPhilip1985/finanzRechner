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
<br>
<button @click="store.addToList()">Safe</button>
<button>Löschen</button>




</template>

<style>

</style>
