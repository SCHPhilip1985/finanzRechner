import { initCustomFormatter, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useStore = defineStore('store', () => {
  const inputData = ref({})
  const outputData = ref(JSON.parse(localStorage.getItem("OutputData")) || [])
  const router = useRouter()

  function addToList(){
    if(inputData.value.index){
      outputData.value[inputData.value.index] = inputData.value
    }else{
      outputData.value.push(JSON.parse(JSON.stringify(inputData.value)))
    }
    localStorage.setItem("OutputData", JSON.stringify(outputData.value))
    router.push('/')
    inputData.value = {}
  }


  return { 
    inputData,
    outputData,
    addToList,
  }
})
