function bind(el, eventType, callback){
	if(typeof el.addEventListener  ===  'function'){
		el.addEventListener(eventType, callback,false);
	}
	else if(typeof el.attechEvent === 'function'){
		el.attachEvent('on' + eventType, callback);
	}
}
function mouseoverHandler(e){
	var target=e.target||e.scrElement;
	var outer=document.getElementById('subject');
	var list =outer.getElementsByTagName('li');
	for(var i=0;i<list.length;i++){
		list[i].className=' ';
	}
	while(target.tagName !='LI'&& target.tagName != 'BODY' ){
		target =target.parentNode;
	}
	target.className='big';
}
	function intList(){
		var outer=document.getElementById('subject');
		var list =outer.getElementsByTagName('li');
		for( var i=0;i<list.length;i++){
			bind(list[i],'mouseover',mouseoverHandler);
		}
	}
	intList();