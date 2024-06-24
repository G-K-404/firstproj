class APIErrors extends Error{
    constructor(
        message = "Summin went wrong!",
        statusCode,
        errors = [],
        stackt = ""
    ){
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.errors = errors
        this.data = null
        if(stackt){
            this.stack=stackt
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export default APIErrors