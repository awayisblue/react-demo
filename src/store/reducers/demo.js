/**
 * Created by John on 2017/2/28.
 */
export default {
    state:"",
    reducers:{
        changeText(state,action){
            let text = action.text
            return text;
        },
        clearText(state,action){
            return '';
        }
    }
}