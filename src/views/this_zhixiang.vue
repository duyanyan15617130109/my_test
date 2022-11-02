<template>
  <div class=''></div>
</template>

<script>
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("xiaoming", 100);
var obj = {}
Person.apply(obj, ['xiaoming', 300]);//Person {name: 'xiaoming', age: 100};
Person.call(obj, 'xiaozhang', 300);//Person {name: 'xiaoming', age: 100};
console.log(person,obj)
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {

  }
}
</script> 

<style scoped lang='scss'>
</style>