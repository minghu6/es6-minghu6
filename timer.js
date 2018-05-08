factory.fixedIntervalFactory = (f, time) => {
    function innerFunc() {
        if (!f.needClear) {
            f().finally(setTimeout(innerFunc, time))
        }
    }

    innerFunc()
}
