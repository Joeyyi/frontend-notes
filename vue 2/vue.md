## Vue instance
new Vue {
    el: '//element selector: the same as css',
    data: {
        string: 'a',
        number: 0
        //inside this instance, access these variables using [this.var]
        //in html, access these variables using [{{ var }}]
        //outside this intance, acces these variables using []
    },
    methods: {
        var: function() {
            //do something
        }
        //methods are called multiple times each time something in the instance changes
        //in html, refer a method as [{{ var() }}]
    },
    computed: {
        var: function() {
            //some condition
            return computed;
        }
        //computed functions are called only when something inside its function changes
        //in html, refer a computed var as [{{ var }}]
        //allows only synchronized(immediate) actions 
    },
    watch: {
        variable(appeared in data): function(value) {
            //if the value changes, do something
        }
        //allows asynchronized actions 
        //e.g. setTimeOut, ajax
    }

}

## HTML template

<div v-on:vueEvent="code here"></div>
<div v-bind:attrName=" a data property(for display only) "></div>
<div v-model=" a data property(two way data binding, for form input elements "></div>

### Shorthands
- v-on: == @
- v-bind: == : 

## Dynamic Styling with CSS Classes
### controlling a class
1. in html, bind a class attr. you can use:
    - an expression(data property)
    - an object { key==className : value==boolean }
    - an array [class1, {class2: true}, ...]

e.g.

<div 
    class="demo"
    :class="{ class : isActive }"
    @click="attachClass: !attachClass"
></div>

2. in vue instance, define a var in data to toggle the class: 

attachClass: false 

3. in css, define that class

//vue will merge all the class attrs together for you

### controlling multiple classes
you can take them outside the template, and put them inside a computed property

    :class="{ class : booleanValue }"
--> :class="divClasses"

computed: {
    divClasses: function() {
        return {
            class1: this.var1,
            class2: this.var2
        }
    }
}

### using input(v-model)
here you can type in the class name:

<input type="text" v-model="class">
<div :class="class"></div>

data: {
    class: "red"
}

### style attr
:style=" { property: value } "
:style=" obj " ---> in computed
:style=" [obj, { property: value }] "

## DOM interaction

### v-if - conditional rendering
v-if attaches/detaches an element(and its children) to DOM:
<div v-if="boolean"></div>
v-else pairs with the nearest v-if above it:(no elseif)
<div v-else></div>
template tag is suitable for v-if: it won't be shown in html

### v-show - display:none

### v-for 

1.loops through a list/object, and replicates the element where it sits:
you can use nested v-fors:

<li v-for="(object, index) in array">{{ object }},{{ index }}</li>
<li v-for="(key, value, index) in object">{{ key }},{{ index }}</li>

2. loops through a range of number:
<li v-for="n in 10">{{ n }}</li>

template tag is also useful here:

<template v-for="(item, index) in array">
    <p>{{ item }}</p>
    <p>{{ index }}</p>
</template>

### keeping track of elements
1. vue automatically watches an array and updates when it's changed.
2. vue only trackes the position of a value. if you want to track the value, assign a key:
:key="somethingUnique"

## multiple vue instances

1. you can save an Vue instance to a variable, and access all its properties from other places through the variable
2. Vue proxies everything inside the instance for you. You can set a new property outside the vue instance, but Vue won't watch it and proxy it.

## control an element using $ref
<div ref="name"></div>
access it through vm.$refs.name
vm.$refs.name.innerText = "something else";
it may be at the same time controlled by the instance.

## mounting a template using $mount()
1. outside the vue instance, mount a template using $mount(), just like el in the vue instance

vm.$mount("#app");

2. inside the vue instance, you can define a template:

vm2 = new Vue({
    template: '<h1>Hello!</h1>'
});

and append it to html through $el property:

document.getElementById("app").appendChild(vm2.$el);

3. limitations of the template option
only the first matching element will work
---> use reusable components instead

## Vue instance lifecircle

destroy: remove all the connections(js logic) with the element

## Virtual DOM
The virtual DOM compares the new template with itself. If there's some real change to the DOM to be taken of, then it rerenders the DOM.

## Vue-cli
Vue-cli mainly sets up a template for your project.




