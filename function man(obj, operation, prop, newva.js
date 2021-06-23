function man(obj, operation, prop, newvalue){
	if(operation == "delete"){
	    //return new objhect literal with same properties and values obj has
        if(obj.hasOwnProperty(prop)){
            delete obj.prop;
            newvalue = null;
        }

        var newObj = new Object();
        newObj = obj;

        return newObj;
	} else if(operation == "edit") {

        if(obj.hasOwnProperty(prop)){
            //PROPERTY PROP UPDATED TO NEW VALUUE PARAMETER
            obj.prop  = newvalue;
        }

        newObj = new Object();
        newObj = obj;

        return newObj;
	}
}