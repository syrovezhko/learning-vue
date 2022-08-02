# Lesson 1
## Counter

Let's create the basics template like [this](https://github.com/syrovezhko/learning-vue/tree/2226329ee93b5fb3e428666784329677c371a878/lesson%201).  
For start we need import Vue.js as a CDN package. It's usually used for prototyping or learning purposes. We can use the latest version with: 
```html
<script src="https://unpkg.com/vue@next"></script>
```

### Let's start codding!
<details>
<summary>First of all we need HTML structure for our counter:</summary>

```html
<div class="container pt-5">
  <div class="card center">
    <h1>Counter: 0</h1>
    <div>
      <button class="btn primary">+</button>
      <button class="btn danger">-</button>
    </div>
  </div>
</div>
```
</details>

<details>
<summary>And of course CSS styles:</summary>

```css
.container {
  margin: 0 auto;
  max-width: 1000px;
}

.pt-5 {
  padding-top: 5rem;
}

.card {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.primary {
  background: #42b983;
  color: #fff;
}

.danger {
  background: #e53935;
  color: #fff;
  border-color: #e53935;
}

```
</details>

We'll get two files like [this](https://github.com/syrovezhko/learning-vue/tree/ff442722d400bd98291e1e54cf74f090f589b614/lesson%201), after all.

### It's time Vue magic😉

Now we are ready to implement JS-file into the project. It's going to be an `app.js`.  
***Attention!*** *Don't forget to include it after [CDN package](#counter) with:* 
```html
<script src="app.js"></script>
```
Inside the `app.js` we should use `Vue.createApp()` method, with will contained the object. The object will help us set up our web application.  
For convenience, I moved it to a variable, or rather, to a constant:
```js
const App = {

}

Vue.createApp(App)
```
In order to pass data to HTML, we need to use the `data()` method. The `data()` should return an **object** where **key** is the name of the variable and **value** is the value of the variable.  
Sounds complex, I know. It is easier to see on the example of a *counter*:
```js
const App = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(App)
```
To use it in HTML, we need to interpolate the ***variable*** using the `{{ }}` expression. Fixe the HTML like this:
```html
<h1>Counter: {{ counter }}</h1>
```
However, this is not enough. The browser just renders `Counter: {{ counter }}` as the header.  
The choose of the root DOM node for Vue interaction is needed. We are able to do this by adding the **ID** to the container, for example:
```html
<div class="container pt-5" id="app">
```
All right. Now we should ask Vue to init the app on that place using `mount()` method.  
There are a lot of ways to do it. In my opinion it should be simple as much as possible. Fix the last line in `app.js` like this:
```js
Vue.createApp(App).mount('#app')
```

**Great! It's work!**  
You may change the value of the returns object for another number to be sure. You can see, the counter may changed manually via JS file.

Well, it was good sprint. I think it's tea time.
I hope i have something like [this](#). Check it out before the break.