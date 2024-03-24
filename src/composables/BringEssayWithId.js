import {ref} from 'vue'
import {db} from '../firebase/config';
import moment from 'moment';

const BringEssayWithId = (id)=>{
    const Essays = ref(null);
    const Errors = ref(null);
    const LoadEssay = async ()=>{
        try {
            let res = await db.collection('Essays').doc(id).get()
            if(!res.exists){
                throw Error('Could not find the essay with the given id')
            }
            const date = res.data().createdDate.toDate()
            const formattedDate = moment(date).locale('tr').format('LL')
            Essays.value={...res.data(), id:res.id, createdDate:formattedDate}
        } catch (error) {
            Errors.value = error.message
        }
    }
    return {Essays,Errors,LoadEssay}
}

export default BringEssayWithId