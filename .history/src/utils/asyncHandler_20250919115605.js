const asyncHandler =  (requestHandler)=>{
    (req, res, next) => {
        Promise.resolve.(requestHandler(req, res, next))
        .catch(next)s
    }
}

export { asyncHandler };