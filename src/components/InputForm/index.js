import React from 'react'
import { Field, Control, Label, Input, Button } from 'bloomer'

const InputForm = props => (
  <form type="submit">
    <Field>
      <Control>
        <Input type="text" placeholder="name" />
      </Control>
    </Field>
    <Field>
      <Control>
        <Input type="text" placeholder="role" />
      </Control>
    </Field>
    <Field>
      <Control>
        <Input type="text" placeholder="date started" />
      </Control>
    </Field>
    <Field>
      <Control>
        <Input type="text" placeholder="Monthly Pay" />
      </Control>
    </Field>
    <Button isColor='warning' onClick={props.onSubmit}>Submit</Button>
  </form>
)

export default InputForm
