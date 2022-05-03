# ngx-select

# Step 1: Installation ngx-select
### In terminal root/client write:
waw add ngx-select

# Step 2: Importe SelectModule
### In your user/page.module.ts you must import SelectModule:
```
import { SelectModule } from 'src/app/modules/select/select.module';

@NgModule({
 imports: [
  SelectModule
 ]
})
```

# Step 3: Single
### In order to use a single option, here is an example for you:
```
<wselect 
  [items]="[
    {name:'Item1', _id:'ItemA'}, 
    {name:'Item2', _id:'ItemB'}, 
    {name:'Item3', _id:'ItemC'}
  ]">
</wselect>
```

# Step 4: Single
### In order to use a multiple option, here is an example for you:
```
<wselect 
  [items]="[
    {name:'Item1', _id:'ItemA'}, 
    {name:'Item2', _id:'ItemB'}, 
    {name:'Item3', _id:'ItemC'}]"
  [select]="['ItemA','ItemC']" 
  [multiple]="true">
</wselect> -->
```

# Step 5: Single
### In order to use one option, from the finished object here is an example for you:
```
<wselect 
  *ngIf="vr.variables?.length" 
  [items]="vr.variables" 
  [select]="[vr.variables[0]]" 
  [multiple]="true">
</wselect> -->
```

## Inputs

| Option        | Default                         | Description               |
| ------------- |---------------------------------| --------------------------|
| items         | `[]`                            | Array of strings, numbers or objects |
| `_items`      | `{}`                            | Object of strings, numbers or objects to which `items`|
| value         | `_id`                           | This id of strings, numbers or objects to which `items` |
| multiple      | `false`                         | Turns on the multiple mode |
