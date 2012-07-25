//
// function-queue — FunctionQueue
// today is 7/25/12, it is now 3:25 PM
// created by TotenDev
// see LICENSE for details.
//
	
/**
* Initialize FunctionQueue function
**/
module.exports = function () { return new FunctionQueue(); }
function FunctionQueue() {
	FunctionQueueObject = this;
	FunctionQueueObject.container = new Array();
};

/**
* Push function to queue
**/
FunctionQueue.prototype.push = function push(leFunction) {
	//Checks
	if (!leFunction) { 
		var errorStr="leFunction *REQUIRED* parameter is missing;"; 
		console.error(errorStr);
		return false; 
	}
	
	FunctionQueueObject.container.push(leFunction);
	if (FunctionQueueObject.container.length == 1) { FunctionQueueObject.nextInQueue(); }
};

/**
* Execute and call next in queue if have it
**/
FunctionQueue.prototype.nextInQueue = function nextInQueue() {
	if (FunctionQueueObject.container.length>0) {
		var callback = function () {
			FunctionQueueObject.container.splice(0,1);
			FunctionQueueObject.nextInQueue();
		}
		//execute function with callback, to execute next one
		FunctionQueueObject.container[0](callback);
	}
}


/**
* Remove all object
**/
FunctionQueue.prototype.removeAllObjects = function removeAllObjects() {
	FunctionQueueObject.container.splice(0,FunctionQueueObject.container.length);
}