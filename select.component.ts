import { Component, ElementRef, Input, TemplateRef, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
	selector: 'wselect',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	@Output() update: EventEmitter<any> = new EventEmitter<any>();
	@Input('placeholder') selected: string = ""
	@Input() items: any = [];
	public _items: any = {};
	@Input() name = 'name';
	@Input() value = '_id';
	@Input() model: any;
	@Input() multiple: boolean = false;
	@Input() label: string = '';
	@Input() searchable: boolean = false;
	@Output() modelChange = new EventEmitter()
	public _values: any = [];
	public _names: any = [];
	public _selected: string;
	public selectShow: any;
	@Input('select') select: any = {};
	@Input('view') t_view: TemplateRef<any>;
	@Input('item') t_item: TemplateRef<any>;
	@Input('search') t_search: TemplateRef<any>;
	public search: string = '';
	@ViewChild('e_search', { static: false }) e_search: ElementRef;
	focus_search() {
		this.search = '';
		if (!this.searchable || this.t_search) return;
		if (!this.e_search) {
			return setTimeout(this.focus_search.bind(this), 100);
		}
		this.e_search.nativeElement.focus();
	}
	constructor() { }
	ngOnInit() {
		for (let i = 0; i < this.items.length; i++) {
			this._items[this.items[i]._id] = this.items[i];
		}
		console.log(this._items);
	}
	item_onclick(item) {
		if (this.multiple) {
			if (this._values.indexOf(item[this.value]) != -1) {
				this._values.splice(this._values.indexOf(item[this.value]), 1);
			} else {
				this._values.push(item[this.value]);
			}
			if (this._names.indexOf(item[this.name]) != -1) {
				this._names.splice(this._names.indexOf(item[this.name]), 1);
			} else {
				this._names.push(item[this.name]);
			}
			this._selected = this._names.length == 0 ? this.selected : this._names.join(', ');
			this.model = this._values;
		} else {
			this._selected = item[this.name];
			this.selectShow = false;
			this.model = item;
		}
		this.modelChange.emit(this.model);
	}
}
