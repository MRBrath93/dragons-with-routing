<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
    // Her kan du tilføje logik til at sende formularen
    console.log('Navn:', name.value);
    console.log('Email:', email.value);
    console.log('Besked:', message.value);

    // Ryd felterne efter indsendelse
    name.value = '';
    email.value = '';
    message.value = '';
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
            <label for="name">Navn</label>
            <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
            <label for="message">Besked</label>
            <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
    </form>
</template>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input,
textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    padding: 0.75rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background-color: #555;
}
</style>
