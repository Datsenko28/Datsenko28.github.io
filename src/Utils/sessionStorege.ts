const sessionStorage = {
    key(name: string) {
        return `sessionStorage.v0.1.${name}`;
    },
    has(name: string) {
        try {
            const key = this.key(name);
            return window.sessionStorage && window.sessionStorage.getItem(key);
        } catch (e) {
            console.warn(`Cannot parse session storage value ${this.key(name)}`, e);
        }

        return false;
    },
    save(name: string, value: string) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(this.key(name), JSON.stringify(value));
        } catch (e){
            console.warn(`Cannot save session storage value ${this.key(name)}: ${JSON.stringify(value)}`, e);
        }
    },
    load(name: string) {
        let result = null;

        try {
            const key = this.key(name);
            const str = window.sessionStorage && window.sessionStorage.getItem(key);
            if (!str) {
                return result;
            }
            result = JSON.parse(str);
        } catch (e) {
            console.warn(`Cannot parse session storage value ${this.key(name)}`, e);
        }

        return result;
    },
    remove(name: string) {
        try {
            const key = this.key(name);
            window.sessionStorage && window.sessionStorage.removeItem(key);
        } catch (e){
            console.warn(`Cannot remove session storage value ${this.key(name)}`, e);
        }
    }
};

export default sessionStorage;