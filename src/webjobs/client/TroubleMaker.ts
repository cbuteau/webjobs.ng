
class TroubleMaker {\
    public static instance: TroubleMaker = new TroubleMaker()
    options: object
    setup(options) {
        this.options = options;
        // other setup steps.
        // might not need setup.
    }

    start(options) {
        // job options
        // job parameters
        // and module path
    }
    

}

export TroubleMaker.instance;