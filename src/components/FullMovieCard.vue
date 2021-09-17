<template>
  <FlexboxLayout
    flexDirection="column"
    class="m-4 rounded-2xl pb-2 bg-white shadow-lg"
    @tap="viewMovieDetails"
  >
    <image
      :src="movie.poster"
      stretch="aspectFit"
      loadMode="async"
      class="rounded-t-2xl w-full"
    />
    <FlexboxLayout
      flexDirection="column"
      class="p-3 divide-y-2 divide-blue-200 divide-dotted"
    >
      <FlexboxLayout flexDirection="column">
        <label textWrap="true" class="text-blue-700">
          <FormattedString>
            <span
              :text="movie.title"
              class="font-semibold text-xl p-2 truncate ..."
            />
          </FormattedString>
        </label>
        <label textWrap="true">
          <FormattedString>
            <span
              :text="' (' + movie.date + ')'"
              class="font-semibold text-md p-2 truncate ..."
            />
          </FormattedString>
        </label>
      </FlexboxLayout>
      <label textWrap="true" class="pt-4 text-gray-700 h-8">
        <FormattedString>
          <span :text="movie.overview" class="font-semibold text-md p-2" />
        </FormattedString>
      </label>
      <WrapLayout class="mt-2 gap-2">
        <label
          textWrap="true"
          class="border border-blue-400 bg-blue-100 text-blue-800 p-2 rounded-lg uppercase m-1"
        >
          <FormattedString>
            <span
              :text="movie.original_language"
              class="font-semibold text-md p-2 truncate ..."
            />
          </FormattedString>
        </label>
        <label
          textWrap="true"
          class="border border-blue-400 bg-blue-100 text-blue-800 p-2 rounded-lg m-1"
        >
          <FormattedString>
            <span
              :text="'Popularity: ' + movie.popularity"
              class="font-semibold text-md p-2 truncate ..."
            />
          </FormattedString>
        </label>
        <label
          textWrap="true"
          class="border border-blue-400 bg-blue-100 text-blue-800 p-2 rounded-lg m-1"
        >
          <FormattedString>
            <span
              :text="'Vote count: ' + movie.vote_count"
              class="font-semibold text-md p-2 truncate ..."
            />
          </FormattedString>
        </label>
        <label
          textWrap="true"
          class="border border-blue-400 bg-blue-100 text-blue-800 p-2 rounded-lg m-1"
        >
          <FormattedString>
            <span
              :text="'Vote average: ' + movie.vote_average"
              class="font-semibold text-md p-2 truncate ..."
            />
          </FormattedString>
        </label>
      </WrapLayout>
    </FlexboxLayout>
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
