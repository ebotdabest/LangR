# LangR

LangR is a lightweight front-end language manager for html written fully in javascript

Get started:
Copy this code into the **head** tag:
```
<script>
        document.addEventListener("DOMContentLoaded", function () {
            LangR.init({
                rootPath: "langs",
                currentKey: "en_us"
            });
        });
</script>
```

the *rootPath* defines the directory where it will look for the language files.
For example if we have this setup:
```
root/
├── langs/
│   ├── en_us.json
│   └── hu_hu.json
└── index.html
```

with the code avobe it will look for: **langs**/**en_us**.json

