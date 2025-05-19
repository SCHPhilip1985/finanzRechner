import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useStore = defineStore('store', () => {
  const inputData = ref({})
  const outputData = ref(JSON.parse(localStorage.getItem("OutputData")) || [])
  const router = useRouter()
  const selecter = ref({})

  

  const sum = computed(() => {
    // outputData.value[1].euro
    let sumHelper = 0
    outputData.value.map((element) => {
      sumHelper += element.euro
    } )
    return sumHelper
})
  // Gesamtsummen zu sehen


  const sumHaushaltsmittel = computed(() => {
    // outputData.value[1].kategorie
    // let sumHelper = 0
    // outputData.value.map((element) => {
    //   if (element.kategorie === "Haushaltsmittel"){
    //     sumHelper += element.euro
    //   }
    // })
    // return sumHelper
    console.log("sumHaushaltsmittel")
  return sumValueUnderCondition("Haushaltsmittel")
})

  const sumLebensmittel = computed(() => {
    // outputData.value[1].kategorie
//     let sumHelper = 0
//     outputData.value.map((element) => {
//       if (element.kategorie === "Lebensmittel"){
//         sumHelper += element.euro
//       }
//     })
//     return sumHelper
   return sumValueUnderCondition("Lebensmittel")
})

function sumValueUnderCondition(compareValue){
    let sumHelper = 0
    outputData.value.map((element) => {
      if (element.kategorie === compareValue){
        sumHelper += element.euro
      }
    })
    return sumHelper
}
// ausgaben einer bestimmten kategorie summiert



  function addToList(){
    if(inputData.value.index){
      outputData.value[inputData.value.index] = inputData.value
    }else{
      outputData.value.push(JSON.parse(JSON.stringify(inputData.value)))
    }
    localStorage.setItem("OutputData", JSON.stringify(outputData.value))
    cancel()
  }

  function editEntry(index){
    inputData.value = outputData.value[index]
    inputData.value.index = index
    router.push('/inPut')
  }

  function deleteFromList(index){
    outputData.value.splice(index, 1)
    cancel()
  }

  function cancel(){
    inputData.value = {}
    router.push('/')
  }

  


  return { 
    inputData,
    outputData,
    addToList,
    editEntry,
    deleteFromList,
    cancel,
    sum,
    sumHaushaltsmittel,
    sumLebensmittel,
    selecter,
  
  }
})
