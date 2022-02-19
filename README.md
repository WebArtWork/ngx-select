# ngx-select

## Usage
```html
<wselect [items]="items" placeholder="Choose an item.." [multiple]="true" [searchable]="true" [(model)]="value.select" (modelChange)="test()"></wselect>
```

## Arguments
```
items: Array | List of items [{name: 'Item #1', value: 'item1}, {name: 'Item #2', value: 'item2}]
placeholder: string | Placeholder for select
multiple: boolean | Multiselect mode
searchable: boolean | Searchable mode
model: string | Array | Returns the selected item / items
modelChange | Called when model changes
```
