# Lesson 3

***[<< Back Lesson 2](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202)***

## A note taking app `v2`

We may make it better, I think. The optimizations of code, local storage etc.

![image](#) coming soon...
> Test on the GitHab Pages: [click](https://syrovezhko.github.io/learning-vue/lesson%203/src/)
***

We will continue to work with the previous lesson code. You may copy it from [here](https://github.com/syrovezhko/learning-vue/tree/37dc6dbddb4f6237246fd60517ac7a2d71e88efa/lesson%202/src).

### Step 1: code minimize by Labels

You will notice that there are two most commonly used vue directives: `v-bind` and `v-on`.  
Usually developers used that's short labels: `:` Instead of `v-bind` and `@` Instead of `v-on`.  
Fore example: `v-bind:value="inputValue"` is equal to `:value="inputValue"`, `v-on:input="inputHandler"` is equal to `@input="inputHandler"`.

Now, you may minimize the code like this. Just do it!

![image](do_it.gif)

### Step 2: introduction to forms optimization, `v-model`

We did a lot an extra work, you know? We wrote manually the `inputValue` bind throw the `inputHandler` model to provide [Two-Way Data Binding](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202#step-2-two-way-data-binding). Don't start lobbing rotten tomatoes at me. It was necessary to understanding the cornerstone of `v-model`.

Now, we may remove `inputHandler` from methods. Also, `v-bind:value="inputValue"` and `v-on:input="inputHandler"` should be replaced by `v-model` in the HTML, like this:
```HTML
<input
  class="form__input"
  type="text"
  @input="inputHandler"
  @keypress.enter="addNewNote"
  v-model="inputValue" <!-- 👈👈👈write this -->
  <!-- instead of this👇👇👇 -->
  <!-- :value="inputValue" -->
  <!-- @input="inputHandler" -->
>
```
You may see, the app works the same but 4 code strings shorter.
***

**Hurray! We did it!**  
You mau check out result of the work done here: [click](#).

See you next lesson! Bye😀

**[Lesson 2](https://github.com/syrovezhko/learning-vue/tree/lesson2/lesson%202) | [Lesson 4](https://github.com/syrovezhko/learning-vue/tree/lesson4/lesson%204)**

[Back main branch](https://github.com/syrovezhko/learning-vue)