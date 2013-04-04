# jquery.getVal

customisable proxy for val

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/davetayls/jquery.getVal/master/dist/jquery.getVal.min.js
[max]: https://raw.github.com/davetayls/jquery.getVal/master/dist/jquery.getVal.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.getVal.min.js"></script>

<input type="text" value="text" />
<input type="checkbox" name="checkbox" value="yes" checked />
<input type="radio" name="radio" value="no" />
<input type="radio" name="radio" value="yes" checked />

<script>
jQuery(function($) {
    $('[name="checkbox"]').getVal(); //=> 'yes'
    $('[name="checkbox"]').getVal({ checkedType: 'checked' }); //=> true
    $('[name="radio"]').getVal(); //=> 'yes'
    $('[name="radio"]').getVal({ radioType: 'val' }); //=> 'no'
    $('[name="radio"]:checked').getVal({ radioType: 'val' }); //=> 'yes'
});
</script>
```

## Release History

### 0.1.0
 - initial release
