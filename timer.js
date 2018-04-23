const constantIntervalFactory = (f, time, goOn) => {
    function innerFunc() {
        if (goOn) {
            f()
            setTimeout(innerFunc, time)
        }
    }
    
    innerFunc()
}
