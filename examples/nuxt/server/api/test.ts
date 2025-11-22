export default defineEventHandler(async () => {
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

  return data
})
