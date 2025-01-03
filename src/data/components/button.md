# Button Component

_Example mark up_

```html
<button
  id = [string]
  class = [string]
  type= "button" | "reset" | "submit"
  disabled | disabled = true / false
  loading | loading = true / false
>
  Button text
  <i class="arrow-right"></i>
</button>
```

## Potential attributes

`variant = "primary" | "secondary" | "tertiary"`

> Consider using a CSS class instead.

`icon-placement = "left" | "right"`

> Consider using a CSS class instead.
>
> If the icon is added as a slot, you can infer the icon placement from that.
