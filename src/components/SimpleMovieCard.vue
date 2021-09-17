<template>
  <FlexboxLayout
    flexDirection="column"
    class="p-2 h-64 w-40 rounded-2xl shadow-lg"
    @tap="viewMovieDetails"
  >
    <image
      :src="movie.poster"
      stretch="fill"
      loadMode="async"
      class="rounded-2xl h-40 w-40"
    />
    <label textWrap="true" class="text-gray-700 text-center">
      <FormattedString>
        <span
          :text="movie.title"
          class="font-semibold text-xs p-2 truncate ..."
        />
      </FormattedString>
    </label>
  </FlexboxLayout>
</template>

<script>
import MovieDetailsPage from "./MovieDetailsPage.vue";

export default {
  props: {
    movie: Object,
  },

  components: {
    MovieDetailsPage,
  },

  methods: {
    viewMovieDetails() {
      this.$navigateTo(MovieDetailsPage, {
        props: { movie: this.movie },
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
    },
  },
};
</script>

<style></style>
