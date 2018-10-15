<template>
    <div class="panel panel-success">

        <ul>
            <li v-for="teacher in changeTeachers">
                <span>{{teacher.name}}</span>
                <span>{{teacher.num}}课</span>
            </li>
        </ul>
        <button @click="reduceClass({num:4})">课程减少</button>
        <button @click="increaseClass">课程增加</button>
    </div>
</template>

<script>
    export default {
        computed: {
            teachers() {
                return this.$store.state.teachers
            },
            changeTeachers(){
                return this.$store.getters.changeTeachers
            }
        },
            data(){
            return{
            }
        },
        methods:{
            reduceClass(amount){
                // this.$store.state.teachers.map(teacher =>{
                //     teacher.num -= 1
                // })
                // this.$store.commit('reduceClass')  //触发mutations里面的方法
                this.$store.dispatch("reduceClass",amount)
            },
            increaseClass(){
                this.$store.state.teachers.map(teacher =>{
                    teacher.num += 1
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        box-sizing: border-box;
        padding: 10px;
        background: pink;
        margin: 10px;
        list-style: none;
        li{
            margin: 10px;
            display: flex;
            justify-content: space-around;
        }
    }
    button{
        border:none
    }
</style>