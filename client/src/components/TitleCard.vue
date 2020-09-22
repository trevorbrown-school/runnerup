<template>
    <div class="title">
        <div class="text">runnerup.io</div>
        <div class="icon">
            <i class="fas fa-shoe-prints"></i>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes title {
    0% {
        width: 0%;
    }

    95% {
        width: 100%;
        margin-right: 2rem;
    }
    100% {
        width: 100%;
        margin-right: 0;
    }
}
.title {
    -moz-user-select: none;
    user-select: none;
    color: var(--text-color-main);
    font-size: 2em;
    padding: 1rem;
    height: 2em;
    display: flex;
    flex-direction: row;
}

.text {
    font-size: 2rem;
    display: inline-block;
    overflow: hidden;
    font-weight: bolder;
    animation: title 1.3s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
    margin-right: 5px;
    text-transform: uppercase;
    letter-spacing: 8px;
}
.icon {
    transform: rotate(-90deg);
    background-color: transparent;
    display: inline-block;
    font-size: 2rem;
}
</style>
