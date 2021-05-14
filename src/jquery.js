window.$ = window.jQuery = function(selector) {
	let element;
	if (typeof selector === "string") {
		let num = selector.indexOf("<");
		if (num === -1) {
			element = document.querySelectorAll(selector);
		} else {
			element = createEle(selector);
		}
		
	} else if (selector instanceof Array) {
		element = selector;
	}

	function createEle(string) {
		const container = document.createElement("template");
		container.innerHTML = string.trim();
		return [ container.content.firstChild ];
	}
	
	const api = Object.create(jQuery.fn);
	Object.assign(api, {
		element:element,
		oldApi:selector.oldApi,
		jquery:true
	});
	return api;
};

jQuery.fn = jQuery.prototype = {
	constructor:jQuery,
	appendTo(node) {

		if (node instanceof HTMLBodyElement) {
		
			this.each((el) => {
				
				node.appendChild(el);
			});
		
		} else if (node.jquery) {
      
			this.each((el) => {
				node.element[0].appendChild(el);
			});
			
		}
	},
	addClass(className) {
		for (let i = 0; i < this.element.length; i++) {
			this.element[i].classList.add(className);
		}
		return this;
	},
	find(selector) {
		let array = [];
		for (let i = 0; i < this.element.length; i++) {
				
			array = array.concat(Array.from(this.element[i].querySelectorAll(selector)));
		}
		array.oldApi = this;
		return $(array);
	},
	end() {
		return this.oldApi;
	},
	each(fn) {
		for (let i = 0; i < this.element.length; i++) {
			
			fn.call(null, this.element[i], i);
		}
		return this;
	},
	parent() {
		let array = [];
		this.each((node) => {
			if (array.indexOf(node.parentNode) === -1) {
				array.push(node.parentNode);
			}
				
		});
            
		return $(array);
	},
	children() {
		let array = [];
		this.each((node) => {
			array.push(...node.children);
		});

		return $(array);
	},
	siblings() {
		let array = [];

		this.each((node) => {
			
			array = this.parent().children().element.filter(n => n !== node);
		});
		array.oldApi = this;
		
		return $(array);
	},
	index() {
		//无参数，只返回第一个匹配元素在所有兄弟元素中的位置
		let bro = this.parent().children().element; 
		let i = 0;
		if (this.element.length === 0) {
			return -1;
		} else {
			for (; i < bro.length; i++) {
				if (bro[i] === this.element[0]) {
					break;
				}
			}
			return i; 
		}

	},
	next() {
		let array = [];
		this.each((node) => {
			array.push(node.nextElementSibling);
		});
		array.oldApi = this;
		return $(array);
	},
	prev() {
		let array = [];
		this.each((node) => {
			array.push(node.previousElementSibling);
		});
		array.oldApi = this;
		return $(array);
	},
	print() {
		console.log(this.element);
		return this;
	}
};