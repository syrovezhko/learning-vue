# learning vue
This is my vue learning blog.
I'm going to post my successes and failures in my endeavors. I hope this will help me not to give up on the way to the goal and, perhaps, will be a structured tutorial for all interns or beginners.

***
***
## Lesson 1: [counter](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201)

`02.08.2022`
***Deploy link: [click](https://syrovezhko.github.io/learning-vue/lesson%201/src/).***


![image](https://github.com/syrovezhko/learning-vue/blob/lesson1/lesson%201/counter.gif)

> The first steps. Used Vue.js as a CDN package.

<details>
<summary>The simple application:</summary>

```JS
const App = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(App).mount('#app')
```
</details>

<details>
<summary>Width the simple HTML</summary>

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue 3 Counter</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container pt-5" id="app">
      <div class="card center">
        <h1>Counter: {{ counter }}</h1>
        <div>
          <button class="btn primary" v-on:click="counter++">+</button>
          <button class="btn danger" v-on:click="counter > 0 ? counter-- : 0">-</button>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```
</details>

### ***Check it out on the GitHub: [click](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201)***

***

