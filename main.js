class LangR {
    static init(args) {
        this.path = args.rootPath;
        this.key = args.currentKey;
        this.customPath = args.bigPath;

        this.useAutoPath = false;
        if (this.customPath == null) {
            let currentUrl = window.location.href;
            let url = new URL(currentUrl);
            let segments = url.pathname.split('/');
            segments.pop();
            let fPath = segments.join('/') + '/';
            this.customPath = url.origin + fPath;
            this.useAutoPath = true;
        }
        this.loadLang()
    }

    static updateLang(langData) {
        document.querySelectorAll("[langr-key]").forEach(el => {
            const langrKey = el.getAttribute("langr-key");
            try {
                el.innerText = langData[langrKey];
            }catch (e) {
                console.error("[LangR] ERROR: The key " + langrKey + " does not exist!");
            }
        })
    }

    static loadLang() {
        let fullPath = ""
        if (this.useAutoPath) {
            fullPath = this.customPath + '/' + this.path + '/' + this.key + '.json'
        }else {
            fullPath = this.customPath + '/' + this.key + '.json'
        }
        const xhr = new XMLHttpRequest();
        xhr.open("GET", fullPath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                try {
                    LangR.updateLang(JSON.parse(xhr.responseText))
                }catch(err) {
                    console.error("[LangR] ERROR: COULD NOT PARSE FILE AT: " + fullPath)
                }
            }
        };
        xhr.send();
    }

    static changeLang(newLang) {
        this.key = newLang
        this.loadLang()
    }
}
