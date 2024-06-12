# LangR

LangR is a lightweight front-end language manager for html written fully in javascript

# Get started
Copy this code into the **head** tag:
```javascript
<script type="module">
        import { LangR } from 'https://ebotdabest.github.io/LangR/langr.js';
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

# Language json setup

with the code avobe it will look for: **langs**/**en_us**.json
An example of a english language json:
```json
{
  "index.topbar": "Main site",
  "index.buttons.first": "I'm the first button",
  "index.buttons.second": "I'm the second button",
  "index.buttons.third": "I'm the third button"
}
```
and another in italian (i used google translate):
```json
{
  "index.topbar": "Pagina principale",
  "index.buttons.first": "Sono il primo pulsante",
  "index.buttons.second": "Sono il secondo pulsante",
  "index.buttons.third": "Sono il terzo pulsante"
}
```
however we need to make sure key's stay consistent.

# Full html example
Example use in html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="module">
        import { LangR } from 'https://ebotdabest.github.io/LangR/langr.js';
        document.addEventListener("DOMContentLoaded", function () {
            LangR.init({
                rootPath: "langs",
                currentKey: "en_us"
            });
        });
    </script>
</head>
<body>
    <h1 langr-key="index.topbar">I can be any text for testing i will not be visible!</h1>

    <button langr-key="index.buttons.first">Btn1</button>
    <button langr-key="index.buttons.second">Btn2</button>
    <button langr-key="index.buttons.third">Btn3</button>
</body>
</html>
```
# Changing language

And changing language can be seen here:
```html
<body>
    <h1 langr-key="index.random-text">I will contain random text</h1>

    <button onclick="LangR.changeLang('en_us')" langr-key="buttons.switch.en">Switch to english</button>
    <button onclick="LangR.changeLang('hu_hu')" langr-key="buttons.switch.hu">Switch to hungarian</button>
</body>
```
it will also refresh the text on the entire page

# Using custom webservers
if you contain your language assets on a separate server, LangR can handle that as well
```html
<script type="module">
        import { LangR } from 'https://ebotdabest.github.io/LangR/langr.js';
        document.addEventListener("DOMContentLoaded", function () {
            LangR.init({
                rootPath: "langs",
                currentKey: "en_us",
                bigPath: "http://mycdn.domain.tld/langs"
            });
        });
</script>
```
however, in here, the rootPath isn't relevant, here we will need to define the full url.

we use the **langr-key** attribute to tell the language manager the language key.
LangR also automatically makes itself globally available on the site, so you can use it statically anywhere on the imported html documents see in the button examples

Made by a fifteen year old in 30 minutes without AI, by the way so negativity will be retaliated.
(Unless constructive)
