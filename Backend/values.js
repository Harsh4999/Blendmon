let link_id;
const setValues = ()=>{
	 link_id= document.getElementById("inputLink").value;
	console.log(link_id);
	//return link_id;
	//return 1;
	//document.write(x);	
}
module.exports.getValues=()=>{
	return link_id;
}


