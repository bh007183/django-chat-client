class FormHelper{
 
    
    handleInput(state, setState, event){
        let name = event.target.name
        let value = event.target.value

        setState({
            ...state, [name]: value
        })
    }
    
}
export default FormHelper

