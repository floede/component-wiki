# Input Component

_Example mark up_

```html
<input 
  id = [string] 
  class = [string] 
  type = "text" | "email" | "password" | "number" | "search" 
  name = [string] 
  value = [string] 
  disabled | disabled = true / false 
  required | required = true / false 
  readonly | readonly = true / false
>
    This could be the label text
    <span slot="error-msg">Please correct the error</span>
    <span slot="help-msg">This input is for ...</span>
</input>
```

## Additional attributes

`placeholder = [string]`

> The placeholder should never be for important information, because it disappears as soon as the user activates the input.

`maxlength = [number]`

`minlength = [number]`

`pattern = [regex]`

`autocomplete = "on" | "off"`

## Aria attributes

`aria-activedescendant = [string]`

`aria-described-by = [string]`

`aria-live = [string]`