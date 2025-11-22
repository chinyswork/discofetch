<script setup lang="ts">
const { data, error } = await dfetch.GET('/posts/{id}', {
  params: {
    path: {
      id: 1,
    },
  },
})

if (error) {
  throw createError(error)
}
</script>

<template>
  <div>
    <h1>{{ data?.title }}</h1>

    <p>{{ data?.body }}</p>
  </div>
</template>
