window.$ = window.jquery = function(selector) {
	let element;
	if (typeof selector === "string") {
		element = document.querySelectorAll(selector);
	} else if (selector instanceof Array) {
		element = selector;
	}
	
	return {
		oldApi:selector.oldApi,
		addClass(className) {
			for (let i = 0; i < element.length; i++) {
				element[i].classList.add(className);
			}
			return this;
		},
		find(selector) {
			let array = [];
			for (let i = 0; i < element.length; i++) {
				
				array = array.concat(Array.from(element[i].querySelectorAll(selector)));
			}
			array.oldApi = this;
			return $(array);
		},
		end() {
			return this.oldApi;
		},
		each(fn) {
			for (let i = 0; i < element.length; i++) {
			
				fn.call(null, element[i], i);
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
		print() {
			console.log(element);
			return this;
		}
	};

};