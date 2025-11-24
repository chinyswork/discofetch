export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '../../src/module.ts',
  ],

  discofetch: {
    baseUrl: 'https://jsonplaceholder.typicode.com',

    probes: {
      get: {
        '/todos': {},
        '/posts': {},

        '/posts/{id}': {
          params: {
            id: 1,
          },
        },

        '/users/{id}': {
          params: {
            id: 1,
          },
        },

        '/comments': {
          query: {
            postId: 1,
          },
        },
      },

      post: {
        '/users': {
          body: {
            name: 'John Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
          },
        },
      },
    },
  },
})
