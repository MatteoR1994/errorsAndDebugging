class EmptyStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class InvalidStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class PartialInvalidStringError extends Error{
    constructor(message, partialResult){
        super(message);
        this.partialResult = partialResult
    }
}

class PotentialartialInvalidStringError extends Error{
    constructor(message){
        super(message);
    }
}