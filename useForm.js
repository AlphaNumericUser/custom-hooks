import { useState } from "react";

const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

  return {
    formState,
    onInputChange,
    onResetForm
  }
}

export default useForm
