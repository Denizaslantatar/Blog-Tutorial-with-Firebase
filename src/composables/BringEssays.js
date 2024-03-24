import {ref} from 'vue'
import {db} from '../firebase/config';
const BringEssays=()=>{
    const Essays=ref([])
    const Errors=ref(null)
    const LoadEssayList=async ()=>{
        try {
            let res=await db.collection('Essays').orderBy('createdDate','desc').get()
            Essays.value = res.docs.map(doc=>{
                return {...doc.data(), id:doc.id}
            })
        } catch (error) {
            Errors.value = error.message
        }
        
    }
    return {Essays,Errors,LoadEssayList}
}
export default BringEssays