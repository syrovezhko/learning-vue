# Lesson 2

***[<< Back Lesson 1](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201)***

## A note taking app


Following our [earlier lesson](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201), I'd suggest you to continue the CDN use. I'm going to learn more about ***Events*** by a note taking app creating. This is how it will look like finally:

![image](#) *coming soon...*
> Test on the GitHab Pages: [click](https://syrovezhko.github.io/learning-vue/lesson%202/src/)
***

We may use some pieces of [counter's](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201/src) code I guess.
<details>
<summary>Container, card, CDN package and app.js in HTML:</summary>

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note taking app</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container" id="app">
      <div class="card"></div>
    </div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>Some styles for it:</summary>

```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  background: #2c3e50;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}

.card {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
```
</details>

<details>
<summary>And the <a href="https://github.com/syrovezhko/learning-vue/blob/lesson1/lesson%201/src/app.js">app.js</a> copy without returns values:</summary>

```JS
const App = {
  data() {
    return {
      
    }
  }
}

Vue.createApp(App).mount('#app')
```
</details>