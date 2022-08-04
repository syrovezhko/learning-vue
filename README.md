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

## Lesson 2: [A note taking app](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202)

`03.08.2022 - 04.08.2022`
***Deploy link: [click](https://syrovezhko.github.io/learning-vue/lesson%202/src/).***


![image](https://github.com/syrovezhko/learning-vue/blob/lesson2/lesson%202/note_taking_app.gif)

It was much more complicated app than [counter](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201). The local storage is needed, I guess. May be in future.

I've studied `v-on`, `v-for`, and `v-if`/`v-else` directives. I used [Two-Way Data Binding](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-2-two-way-data-binding), [Events Modifiers](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-5-events-modifiers), [Conditionals](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-6-conditionals) etc.  

It has spent 6 steps totally on the way to success.

### ***Check it out on the GitHub: [click](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202)***

***