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

### ***Learn more: [click](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201)***

***

## Lesson 2: [A note taking app](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202)

`03.08.2022 - 04.08.2022`  
***Deploy link: [click](https://syrovezhko.github.io/learning-vue/lesson%202/src/).***


![image](https://github.com/syrovezhko/learning-vue/blob/lesson2/lesson%202/note_taking_app.gif)

It was much more complicated app than [counter](https://github.com/syrovezhko/learning-vue/tree/lesson1/lesson%201). The local storage is needed, I guess. May be in future.

I've studied `v-on`, `v-for`, and `v-if`/`v-else` directives. I used [Two-Way Data Binding](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-2-two-way-data-binding), [Events Modifiers](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-5-events-modifiers), [Conditionals](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-6-conditionals) etc.  

It has spent 2 days total on the way to success.

### ***Learn more: [click](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202)***

***

## Lesson 3: [A note taking app](https://github.com/syrovezhko/learning-vue/tree/lesson3/lesson%203)

`05.08.2022`  
***Deploy link: [click](https://syrovezhko.github.io/learning-vue/lesson%203/src/).***


![image](https://github.com/syrovezhko/learning-vue/blob/lesson2/lesson%203/note_taking_app_v2.gif)

This is the refinement of [the note taking app](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202). 

> I've made the code shorter and optimize. I've Added local storage of notes and uncompiled template hiding also.

I've studied Labels like `:` and `@`, optimized form by `v-model`,   associated `notes` array with `local storage` and applied un-compiled template hiding via `v-cloak`.

It was good sprint!

### ***Learn more: [click](https://github.com/syrovezhko/learning-vue/tree/lesson3/lesson%203)***

***