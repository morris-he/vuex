<template>
    <div class="panel panel-success">

        <ul>
            <li v-for="teacher in teachers">
                <span>{{teacher.name}}</span>
                <span>{{teacher.num}}课</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        computed: {
            teachers() {
                return this.$store.state.teachers
            },
            ...mapGetters([
                'changeTeachers'
            ])
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions([
                "reduceClass"
            ]),
            increaseClass() {
                this.$store.state.teachers.map(teacher => {
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
        background: grey;
        margin: 10px;
        list-style: none;
        li{
            margin: 10px;
            display: flex;
            justify-content: space-around;
        }
    }
</style>