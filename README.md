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