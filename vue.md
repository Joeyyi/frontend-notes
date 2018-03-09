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



