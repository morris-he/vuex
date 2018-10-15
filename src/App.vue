<template>
  <div id="app">
    <div>
      <teacher-list-one></teacher-list-one>
      <teacher-list-two></teacher-list-two>
    </div>
  </div>
</template>

<script>
  import TeacherListOne from './components/TeacherListOne.vue'
  import TeacherListTwo from './components/TeacherListTwo.vue'
  export default {
      components:{
        'teacher-list-one': TeacherListOne,
        'teacher-list-two': TeacherListTwo
      },
      data(){
          return{
          }
      }
  }
</script>
<style lang="scss">
</style>
