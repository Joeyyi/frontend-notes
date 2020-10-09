Comment:
Ctrl + K, Ctrl + C
Ctrl + K, Ctrl + U
Replace:
Ctrl + F2
Multiple positions input:
Alt
Multiple lines input:
Alt + Shift


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

Module 3: Component Basics ============================================

## Vue-cli
Vue-cli mainly sets up a template for your project.

## Why components?
An instance only applies to the first selected element on the page.
A component is a reusable piece of instance.

<html>
    <div id="app">
        <my-cmp></my-cmp>
        <my-cmp></my-cmp>
        <my-cmp></my-cmp>
    </div>
<html>

<script>
    Vue.component('my-cmp', {         //selector, tag name
        data: function(){             //in a component, data must be a function 
            return { some object }      //while in a root Vue instance it can be an object
        },                              //This is because vue don't want all components to share one data object => see more in the example
        template: 'my template'
    });

    new Vue({
        el:'#app'
    });

</script>

For components, if you set data as an object, all components' data point to the same place in the memory, so they share the data source. We don't want that behavior. Each piece of data should refer to the corresponding component. That's why vue requires data property be a function in components.(Like methods!)


## Registering components globally and locally

Global components: use 'Vue.component' method

    Vue.component('tag-name',{...});

    new Vue({
        el:'#app'
    });

Local components: use 'components' property in the vue instance(the component will be registerd only on this instance)

    var variable = {...};

    new Vue({
        el:'#app',
        components: {
            'selector': variable
        }
    });

## Single file component
//exports a component
//!IMPORTANT: component template should be wrapped up as one root element, not sibling elements

    <template></template>
    <script>
        export default {
            //like a component
        }
    </script>
    <style></style>

## Root App.vue
//imports all the components, sets the main template and exports itself as a single component

    import Component from '/directory';    //import a component from another file
    Vue.component('my-cmp', Component);    //register it globally


## main.js
//imports Vue and root App (and/or other components), and renders them

    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
    el: '#app',
    render: h => h(App)
    })

## Vue project folder structure

For small to medium sized project, you can put all the components under '/components'
For a larger project, it's better to categorize things by feature: Header&Footer, Servers, etc.

Selector names: Javascript style or DOM style?
When naming the components, for a single file structure it's fine to use camelcase selectors, because javascript is case-sensitive and no DOM interaction is involved. (DOM is not case-sensitive)
Actually Vue.js allows access to the same selector with a dash in between.

    components: { appHeader: Header }
    <app-header></app-header> // it works!

But normally we use the dashed version that resembles DOM tags.
In ES6, if the key and value are the same we can shorten the expression:

    components: { Server: Server } 
--> components: { Server } 

## scoped

If there's no specified scoped , the style will be applied globally to all the components.
Use 'scoped' to apply styles within the file.

<style scoped></style>

What does 'scoped' do?
Shadow DOM: sub-DOMs for each components behind the scenes
In Vue.js, styles for each components are specified seperately in <head>, and it uses data-v-xxx attribute to emulate this behavior(shadow DOM), so that styles are applied seperately.
<div data-v-xxxxx></div>  matches   <style> div[data-v-xxxxx] {...} </style>    

# Module 4 Communication =========================================

## Using props tp pass data from parent to child
in the child component: 

<p>my parent's name: {{ name }}</p>
<script>
    export default {
        props: [ 'name']   //refers to a name property specified in the parent component
    }
</script>

//props is just like data. You may access name through this.name

in the parent component: 

<child :name="myName"></child>  //v-bind a name property to a child

<script>
    export default {
        data: function() {
            return {
                myName: 'parent'
            }
        }
    }
</script>

## Validating props

props: {
    myProp:String,                 //a single type
    anotherProp: [String, Array]   //multiple types 
}

If an invalid prop is passed, you will get a warning(dev env) in the console

props: {
    myProp: {
        type: String
        required: true
    }
}

The property must be passed

props: {
    myProp: {
        type: String
        default: 'Opps'
    }
}

set a default value if the property isn't passed.
For primitive types, set literal values
For complex(reference) types, use a function to return the object

## Customizing an event to pass data back to parent
!IMPORTANT: 
When you pass a prop:
For primitive types, the data itself is copied to the child. The two copies don't interfere.
For complex(reference) types, a pointer is copied to the child. They share the source.
When you update a property in the child:
For primitive types, data in the parent won't change
For complex(reference) types, data in parent changes

In the child, emit a custom event using $emit:
this.$emit('eventName', dataToBePassed);

In the parent, listen to that event using v-on:
<div @eventName="dataToBeUpdated = $event"></div>

//$event refers to dataToBePassed

## Unidirectional Data Flow from Top to Bottom

Child 1  <---x---> Child 2  
Children cannot communicate with each other directly

Normal flow:
Parent  --> pass callback as prop      --> Child 1 
Child 1 --> use callback to pass data  --> Parent
Parent  --> pass data as prop          --> Child 2 

methods:
1. use a custom event from the child
2. pass a function from the parent

## Communication between sibling components

method 1: custom events
method 2: callback function passed by parent
method 3: event bus 


## Event Bus for communication
1. create an event bus(an instance) in main.js:

    export const eventBus = new Vue();  //before rendering the main vue instance

2. for child 2, use eventbus.$emit instead of this.$emit

3. for child 1, add a listener when it's created:

    created(){                        ↓whatever name
        eventBus.$on('eventName', (updatedData) => {
            data = updatedData;
        });
    }

## Centralizing code in an event bus

You may move some methods inside the event bus:

    export const eventBus = new Vue({
        methods: {
            changeData(data) {
                this.$emit('dataChanged', changedData);
            }
        }
    });

Or other things you want to be accessible throughout the app...
Then simplify the code in components:

    change() {
        data = newData;
        eventBus.$emit('dataChanged', data);
    }
--> change() {
        data = newData;
        eventBus.changeData(data);
    }


# Module 5 More about components ==============

## Distributing contents with slots

<my-cmp>
    <div>My Content</div>
</my-cmp>

<template>
    <slot></slot>
</template>

1. <slot> takes in html content wrapped in the component tag in the parent template

styles are set in the child component, but everything else are set in the parent component


2. You may assign the content to different slots by using name attribute:

parent:
<my-cmp>
    <h1 slot="title">Title: {{ Title }}</h1>
    <p slot="content">Content</p>
</my-cmp>

child:
<template>
    <slot name="title"></slot>
    <slot name="content"></slot>
</template>

3. You may also name one slot, and leave all the other content in an default slot:

<my-cmp>
    <h1 slot="title">Title: {{ Title }}</h1>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
</my-cmp>

child:
<template>
    <slot name="title"></slot>
    <slot></slot>               //all <p>s go here...
</template>

4. Set slot defaults between <slot> tags...

<slot>Default</slot>

## Dynamic components

<component :is="ComponentID"></comonent>

ComponentID: 'my-cmp'

When you switch between components, they are destroyed and recreated

To override this, use keyword <keep-alive> to wrap the component

# Module 6 Forms ============
## Using v-model
v-model default: listens to every key stoke
v-model.lazy: updates when it loses focus
v-model.trim: cuts off all white space
v-model.number: tranforms into a number 

Use v-model to set default value for textarea. (not between the tags)
v-model keeps multi-line strings. Output with line breaks: use style "white-space: pre"

nest checkboxes, radio buttons in label tags.
For multiple checkboxes, bind the same v-model. Vue will marge all values into an array.
For radio buttons, bind the same v-model. Vue will group them.
For dropdowns, bind v-model to <select> to set default, or use :selected=" xxx == 'dafault'" in <option>

What v-model does:
:value="xxx" @input="xxx = $event.target.value"

To build our own component with v-model, the component needs a value property and emits an input event.

To prevent the default submission to the server, use .prevent modifier.

# Module 6 Directives ==============
## Built-in Directives
## Hooks
 - bind(el, binding, vnode) - once directive is attached
 - inserted(el, binding, vnode) - inseted in parent node
 - update(el, binding, vnode, oldVnode) - once component is updated(without children)
 - componentUpdated(el, binding, vnode, oldVnode) - once component is updated(with children)
 - unbind(el, binding, vnode) - once directive is rendered
## Custom Directives

1. Global directives

<p v-name:binding.arg.modifier1.modifier2="binding.value"></p>

Vue.directive('name', {
    bind(el, binding, vnode) {
        -- binding.value
        -- binding.arg
        -- binding.modifiers['modifier1']
    }
})

2. Local directives

add directives property:

directives: {
    'name': {
        bind(el, binding, vnode) {
            ...
        }
    }
}

# Module 7 Filters & Mixins ==============

use filters to transform data.

1. Global registration
Vue.filter('filterName',);

2. Local registration

filters: {
    filterName(value) {
        return newValue;
    }
}

<p>{{ text | filterName}}</p>

use chained filters: | filter1 | filter2 | filter3...

filters are only used for formatting(?) values. 
For more complex tranformations(e.g. filter a list), create a filter with computed properties. This won't cause unnecessary calculations.


Mixins: for data across applications
1. Local Mixins
create a mixin.js file, export an obj
import it in the component and register

mixins:[]

the mixin will be merged into the exisitng instance

the mixin life hook is executed first, and thereafter the instance life hook.

2. Global Mixins(registered for all instances)

Vue.mixin({
    created() {
        
    }
})

global mixins are called first, then local mixins, then apps

each instance get a fresh copy of the mixin. the mixin is not shared

# Module 8 Animations ==============

Transitions CSS classes:(single elment)
*-enter
*-enter-active
*-leave
*-leave-active

Default: v-enter etc. if no name is supplied
one element in one <transition> tag

<transition name="idenitfier" type="transition"/"animation" > 

type - which one dictates the length of animation
appear - animation during the initial attachment

specify a different name for each animation:
      enter-class=""
      enter-active-class=""
      leave-class=""
      leave-active-class=""

transition properties can be bind with dynamic variables:
<transition :name="idenitfier" :type="my-type" > 
multiple elements:
    <transition mode="out-in"/"in-out">
      <p v-if="show" key="a">AAA</P>    
      <p v-if="!show" key="b">BBB</P>    
    </transition>

JS Animation:

    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"

  methods: {
    beforeEnter(el) {
      console.log('before enter');
    },
    enter(el,done) {
      console.log('enter');
      done();
    },
    afterEnter(el) {
      console.log('after enter');
    },
    enterCancelled(el) {
      console.log('enter cancelled');
    }
  }

exclude css from animation: :css="false"

dynamic components:
<component :is="variable"></component>

Group transitions

<transition> is not rendered to the DOM
<transition-group> dese render a new HTML tag. By default, that will be a <span>, you can overwrite this by setting <transition-group tag="tags">

items have to be keyed

add an item and move the others simultaneously: 
.xxx-move {
    transition: tranform 1s;
}

remove an item and move the others simultaneously:(move it out of the document flow) 
.xxx-leave {
    position: absolute;
}


a flip animation:

.flip-enter {
    /*transform:rotateY(0deg);*/
}

.flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {
    /*transform:rotateY(0deg);*/
}

.flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-in {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(90deg);
    }
}

@keyframes flip-out {
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg);
    }
}

# Module 9 HTTP ==============

use intercepters to modify request/response

# Module 10 Routing ==============

export const routes = [
    { path: '', component: Home },
    { path: '/path1', component: Component },
    { path: '/path2', component: Component }
]

import routes in main.js

in .vue file, mark the place for route component in <router-view/>

Domain/#/route 

the part after the hash tag will not be sent to the server and will be handled by the app

if you don't want the hash tag, the server needs to be configured to always return the index page. 

const router = new Router ({
    routes,
    mode: 'history'  // no hash tag style html5 history
})

## active links

<router-link to="/" tag="li" acitve-class="active" exact><a>Home</a></router-link>

- exact: route matches exact route, otherwise the initial

## navigate from code
this.$router.push({path: '/'});

## route parameters

{ path: '/user/:id', component: Component}

data() {
    id: this.$route.params.id   // $route is the active route
}

if the component is not reloaded, just the path changed, the params won't update. you have to watch them

    watch: {
        '$route'(to, from) {
            this.id = to.params.id;
        }

## sub routes, child routes, nested routes

in the routes:
    {
      path: '/user',
      component: User,
      children: [
        {path: '', component: UserList},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit}
      ]
    }

## query parameters

set query params:
:to { query: {a: 100, b: 'Ah'}}

extract query params:
$route.query.a

## set name for routes

in the routes:
    {
        path: '/user/:id',
        component: User,
        name: 'userDetail'
    }

usage: Obj syntax

:to="{name: 'userDetail', params:{ id: $route.params.id}}"
this.$router.push({ id: $route.params.id})

## set names for multiple router views

Assign names for router-views:

<router-view name="aaa"></router-view>
<router-view></router-view>
<router-view name="bbb"></router-view>
<router-view name="ccc"></router-view>

the one without the name will hold all the unmatched routes

Assign names for routes:

    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            'aaa': Aaa
        }
    }

named rputer views helps reserve certain spots in the app, for different layouts in different routes

## redirecting

in the routes:
{ path:'/aaa', redirect: {name: 'home'}}

redirect any routes that don't exist: *

{ path:'*', redirect: {name: 'home'}}

## route transitions

wrap a router-view in transition tag

## hash fragment and scroll behavior

{hash: '#data'}


const router = new Router ({
    routes,
    mode: 'history'  // no hash tag style html5 history
    scrollBehavior(eo, from, savedPosition) {
        if(savedPosition) {   //user pushed back
        return savedPosition
        }
        if(to.hash) {
            return { selector: to.hash}     //#data
        } 
        return {x: 0, y: 100};  
    }
})

## beforeEnter Guard

for all routes:

router.beforeEach((to, from, next) => {     
    console.log
    next();
})

this will execute for each route each time. so put only generic checks here
next() - continue
next(false) / no next() - abort
next({route obj})  - redirect

for a certain route: inside route setup

{beforeEnter: (to, form, next) => {
    console.log
    next();
}}

for a component:

beforeRouteEnter(to, from, next) {
    next(vm => {
        vm.link = aaa;    //before the component is loaded, you need a callback to access its data
    })
}

beforeRouteLeave(to, from, next) {
            // here the component is already loaded, so you can access its data
            // but don't use arrow function or 'this' is not defined
            // this is useful to prevent the user form leaving with something unsaved
        }


## lazy loading with webpack

put some resources in another bundle, and load them when needed

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
};

# Module 11 VUEX ==============

event bus: ok for medium sized apps, but one bus will quickly get crowded, and it's hard to track changes

VUEX: using a central state, a store holds the state

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    }
})


import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

access data:

this.$store.state.counter

## getters

Store --return--> Getters --access--> Components

getter does the complicated calculation for apps, to reduce code duplication in apps 

    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }

access getters:

    return this.$store.getters.doubleCounter;

## map getters

import { mapGetters } from 'vuex'

computed: mapGetters([
    'doubleCounter',
    'stringCounter'
])

or you can pass an obj and map the getters to different names:

mapGetters({
    dbc: 'doubleCounter',
    sc: 'stringCounter'
})

mapGetter is an obj, to add other computed properties, use ...(spread dots)

pulls out all the properties and list them with other properties.

...mapGetters([a,b,c]),
otherComputed()

to support this, a babel package is necessary:

install --save-dev babel-preset-stage-2 

inside .babelrc:

"presets": [
    ["stage-2"]
]


## mutations(setters)

Components --commit--> Mutations --change state--> Store

    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    }

to commit:
    increment() {
        //this.$emit('updated', 1);
        this.$store.commit('increment');  //name as a string
    },

## map mutations

import { mapMutations } from 'vuex'

...mapMutations([
    'increment',
    'decrement'
])


!mutations must run synchronously

## actions - async tasks

component --dispatch--> actions --commit(after the task is done)--> mutations

    actions: {
        increment: context => {
            context.commit('increment');
        }
    }

context has commit method, and access to getters and so on.
if you only want the commit method, use es6 syntax:

    actions: {
        increment: ({ commit }) => {      //only pulls out commit from context
            commit('increment');
        }
    }

consider creating only actions(if there exists async tasks) or only mutations(if there are only sync tasks), not both, to make the pattern clearer.


mutations and actions provides a second arg 
or more in an obj {a:aaa, b: bbb}

    mutations: {
        increment: (state, step) => {
            state.counter += step;
        },

    }
    actions: {
        asnycIncrement: ({ commit }, args) => {
            setTimeout(() => {
                context.commit('increment', args.step);
            }, args.duration);

    <button @click="increment({step: 10, duration: 1000})">Increment 10</button>


## use v-model with Vuex

    computed: {
      value: {
        get() {
          return this.$store.getters.value;          
        },
        set(value) {
          this.$store.dispatch('updateValue', value);
        }
      }
    }

    computed set() is rarely needed

## modulizing the state management

modules folder

1. for a group:
counter.js
export state, getters, mutations, actions
import counter.js in store.js and add it in modules
    modules: {
        counter
    }

2. by categories:

export state, getters, mutations, actions as single files, and import them with

import * as actions from ...

## using name spaces to avoid naming problems

type.js: set name for all getters, mutations and actions

export const DOUBLE_COUNTER = 'counter/DOUBLE_COUNTER';

to use it:
import * as types from './types'

