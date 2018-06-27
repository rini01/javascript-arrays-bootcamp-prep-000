



module.exports = {chocolateBars}

function addElementToBeginningOfArray(array, element){
	var arr2 = [element, ...array]
	return arr2
}


function destructivelyAddElementToBeginningOfArray(array, element){
	array.unshift(element) 
	return array
}


function addElementToEndOfArray(array, element){
	var arr2 = [...array ,element]
	return arr2
}


function destructivelyAddElementToEndOfArray(array, element){
	array.push(element) 
	return array
}


function accessElementInArray(array, index){
	var element = array[index]
	return element
}


function destructivelyRemoveElementFromBeginningOfArray(array){	
	array.shift()
	return array
}


function removeElementFromBeginningOfArray(array){
	var array2 = array
	array2.shift()
	return array2
}