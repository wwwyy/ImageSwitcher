(function(d){
	var list1 = d.getElementById('list1');
	var list2 = d.getElementById('list2');
	var lis1 = list1.getElementsByTagName('li');
	var lis2 = list2.getElementsByTagName('li');
	var lisW = css(lis1[0],'width');
	var lisT = css(lis1[0],'height');
	var n = 0;
	window.onkeydown = function(ev){
		if (ev.keyCode==37) {
			list1.style.zIndex = 22;
			list2.style.zIndex = 0;
			if (n<=0) {
				n = lis1.length-1;
				css(list1,'left',-n*lisW)
			}
			n--;
			mTween(list1,{left:-n*lisW},500,'easeOut')
			mTween(list2,{top:-n*lisT},500,'easeOut')
		}
		if (ev.keyCode==39) {
			list1.style.zIndex = 22;
			list2.style.zIndex = 0;
			if (n>=lis1.length-1) {
				n = 0;
				css(list1,'left',0)
			}
			n++;
			mTween(list1,{left:-n*lisW},500,'easeOut')
			mTween(list2,{top:-n*lisT},500,'easeOut')
		}
		if (ev.keyCode==38) {
			list1.style.zIndex = 0;
			list2.style.zIndex = 22;
			if (n<=0) {
				n = lis1.length-1;
				css(list2,'top',-n*lisT)
			}
			n--;
			mTween(list2,{top:-n*lisT},500,'easeOut')
			mTween(list1,{left:-n*lisW},500,'easeOut')
		}
		if (ev.keyCode==40) {
			list1.style.zIndex = 0;
			list2.style.zIndex = 22;
			if (n>=lis1.length-1) {
				n = 0;
				css(list2,'top',0)
			}
			n++;
			mTween(list1,{left:-n*lisW},500,'easeOut')
			mTween(list2,{top:-n*lisT},500,'easeOut')
		}
	}
})(document)