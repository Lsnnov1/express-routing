class ExpressError extends Error {
    constructor(message, status){
        // call super when extending a perent class 
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack)
    }
}


// export class to be imported by another file
module.exports = ExpressError;