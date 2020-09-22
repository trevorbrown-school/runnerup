<template>
    <div class="signup">
        <div class="input-box">
            <input v-model="name" type="text" name="ru-name" id="ru-name" />
            <br />
            <input v-model="age" type="number" name="ru-age" id="ru-age" />
            <br />
            <button @click="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
export default {
    data() {
        return {
            name: 'Hello',
            age: '',
        };
    },
    methods: {
        submit() {
            const user = {
                name: this.name,
                age: this.age,
            };
            axios.post('/', user);
        },
    },
};
</script>

<style scoped>
.signup {
    height: 100vh;
}

.input-box {
    margin-left: 5rem;
    margin-top: 5rem;
    border-radius: 7px;
    padding: 2rem;
    display: inline-block;
    background-color: var(--body-color);
}
input {
    margin-bottom: 1rem;
}
</style>
