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

### Step 1: base markup

I believe, it's better to control the app by JS file for the most part. This is also true for the headers, placeholders etc.  
We've already used *interpolation* to display the number inside `<h1>` tag. And, consequently, it's possible to transmit all header data this way. Let's add for the card a child like this:

```HTML
<h1>{{ title }}</h1>
```

And, of course, for the app.js returns object a corresponding model:

```JS
title: 'Note list'
```

Yep, it's work!

As it is the note taking app, obviously we need a form with input, add button and a separation line for notes will be carried:

```HTML
<div class="form">
  <input class="form__input" type="text">
</div>
<button class="btn">add</button>
<hr />
```

<details>
<summary>The styles for it are up to you, but I used this:</summary>

```CSS
.form {
  position: relative;
  margin-bottom: 0.5rem;
}

.form__input {
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
}

.form__input:active,
.form__input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
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
```
</details>
<br>

**Let's launch it.** Looks pretty, doesn't it?

But we don't have some part, an input placeholder. It would be logical create a model and implement interpolation like this:

```JS
const App = {
  data() {
    return {
      title: 'Note list',
      placeholderString: 'Input your note please',
    }
  }
}
```
```HTML
<input class="form__input" type="text" placeholder="{{ placeholderString }}">
```

However, it will display `{{ placeholderString }}` in the input line, not our text. Well, obviously another way is needed...

The `v-bind` directive make it possible to transmit the data to attribute. We don't more need curly braces. It works like `v-on`:

```HTML
<input class="form__input" type="text" v-bind:placeholder="placeholderString">
```
<br>

All right, I've got something like [this](https://github.com/syrovezhko/learning-vue/tree/c41276f33edc63668eeb7f122d96f26cd0793432/lesson%202/src).  
Now, it's time to control it! 

### Step 2: Two-Way Data Binding

In order to save the note we need get data from the input. 
To do this, just putt this: `v-bind:value="inputValue"` ti the `input` tag. Also, create a model, as is the case with placeholder, but with empty string: `inputValue: ''`.  
Now we should listen the event by `v-on`. We're interested in `input` event. So, again, just putt this: `v-on:input="inputHandler"` ti the `input` tag. And, you guessed it, we've got to do something.

This action called as `method`. Now we learn how to delegate some functionality from `HTML` to `JavaScript`.

First of all, the `methods` object, that will contain future methods, needs to be installed on the `root` of `App` const:
```JS
const App = {
  data() {
    // I have removed previously written code here in illustrative purposes.
  },
  methods: {
    // Subsequently, all the activity will be here.
  }
}
```
This is the object we we'll enumerate the feature set of our application. I had suggested earlier `inputHandler` as a name of the accepted data. I'll use this naming for the event processing method. To better understand, let's write this and take a closer look in the console:
```JS
methods: {
  inputHandler(event) {
    console.log("inputHandler", event)
  }
}
```
You will see the `InputEvent` handling as an object of a lot of parameters. By specify the request of logging, `event.target.value`, we see the all entries in the console.  
I think we may a little bit debug on the web page. Insert this line after the form:
```HTML
<h2>inputValue: {{ inputValue }}</h2>
```
Using `this` keyword we may utilize the returns's model like this:
```JS
methods: {
  inputHandler(event) {
    console.log("inputHandler", event.target.value)
    this.inputValue = event.target.value
  }
}
```

Now the title changes dynamically with the input value.  
Yes, we didn't utilized through the `data` object like: `this.data.inputValue`. This is one of the features of Vue that we will discuss later.

The `Two-Way Data Binding` allows us to change the page part only with out refresh.

### Step 3: Display lists with v-for

And thus we come to implementation of the basic feature. And yes, we need to add an array as a return model. In this case, `data` object be like: 
```JS
data() {
  return {
    title: 'Note list',
    placeholderString: 'Input your note please',
    inputValue: '',
    notes: ['note 1: blablabla', 'note 2: blablabla', 'note 3: blablabla']
  }
}
```
And, of course, let's create the HTML after the `<hr />` tag to output it:
```HTML
<ul class="list">
  <li class="list__item">
    {{ notes[0]}}
  </li>
  <li class="list__item">
    {{ notes[1]}}
  </li>
  <li class="list__item">
    {{ notes[2]}}
  </li>
</ul>
```

<details>
<summary>And again,the styles for it are up to you, but I used this:</summary>

```CSS
.list {
  margin: 0;
  padding: 0;
}

.list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
}
```
</details>
<br>
All right, we can transmit array manually. But it is not convenient, because we are not aware a finite number of elements. It is obvious we need to iterate the list element.  

In this case, we can use `v-for`. It is likewise to `for` loop. They both use same expression.
```HTML
<ul class="list">
  <li
    class="list__item"
    v-for="myNote in notes"
  >
      {{ myNote }}
  </li>
</ul>
```
Looks better, doesn't it?

### Step 4: Adding a bit of reactivity

Now we need to make button work. We know how to interact with `v-on`. Just simply complementing th button like this:
```HTML
<button
  class="btn mt-1"
  v-on:click="addNewNote"
>
    add
</button>
```
To process the click, let's create new method as well as in the [step 2](#step-2-two-way-data-binding) section. This method, `addNewNote`, will `push` the `inputValue` to `notes` array:
```JS
addNewNote() {
  this.notes.push(this.inputValue)
  this.inputValue = ''
}
```
Calm down, I know. We've spent a lot time to understand `this` concept with JavaScript. It doesn't work like this in JS, I know. So just accept it. You'll like it, I promise.

We may remove the header with `inputValue` from HTML and `console.log` for it too from methods, I think.

### Step 5: Events Modifiers

What about adding note by press enter key? But do not rush to make new method. Vue may provide us something ready. And, you guessed it, we need `v-on` with `keypress` event. And of course, it's possible to ask listen the `enter` key. Here we go: `v-on:keypress.enter`. Sounds crazy, doesn't it? Thats how we can call `addNewNote` method:
```HTML
<input
  class="form__input"
  type="text"
  v-bind:placeholder="placeholderString"
  v-bind:value="inputValue"
  v-on:input="inputHandler"
  v-on:keypress.enter="addNewNote"
>
```

It's time to clear notes array in app.js, I guess. Bla, blabla were good, but we can control list's items confidently.

### Step 5: parameter passing in method

In order to complete the application the delete feature is needed.  
The delete button could be added to the HTML, for example:
```HTML
<ul class="list">
  <li
    class="list__item"
    v-for="myNote in notes"
  >
      {{ myNote }}
      <button class="btn danger">delete</button>
  </li>
</ul>
```

Obviously, new method needed. I believe, you know, the `v-on` directive with `click` listening will call it:
```HTML
 <button
  class="btn danger"
  v-on:click="removeNote"
>
  delete
</button>
```
It was easy, I know. But how could we determinate what item of array should be removed?  
First of all, we should know the index of array's element. To control it via HTML, the `v-for` list iterator must be changed to: `v-for="(myNote, index) in notes"`.  
So, finally the new note template look lit this:
```HTML
<ul class="list">
  <li
    class="list__item"
    v-for="(myNote, index) in notes"
  >
      {{ myNote }}
      <button
        class="btn danger"
        v-on:click="removeNote(index)"
      >
        delete
      </button>
  </li>
</ul>
```
Yes, we may transmit the arguments using expression like this: `removeNote(index)`. The `removeNote` will used `splice` array method. Let's make this:
```JS
removeNote(index) {
  this.notes.splice(index, 1)
}
```

### Step 6: Conditionals

We have got the note taking app. We can add and remove notes. What else? `IF`, maybe?😉  
It's not so pretty when the `notes` array is empty. I want to see a warning that there are no notes on the list. I mean, if length of array is equals to zero. We should do something like this:
```HTML
<ul class="list" v-if="notes.length !== 0">
...
</ul>
<div v-else>There are no notes here. Please make the firs one.</div>
```

Much better I guess!

Oh no... One more problem I see: the empty string could be saved as a note.
<details>
<summary>You know what I mean. Don't peak!😉</summary>

***Well-well-well... You just checking yourself. I hope so.***

Yes, we need to add the `inputValue` check into the `addNewNote` method. If it's not an empty string we may do push data to the array:
```JS
addNewNote() {
  if (this.inputValue !== '') {
    this.notes.push(this.inputValue)
    this.inputValue = ''
  }
}
```
</details>