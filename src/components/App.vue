<template>
  <Page class="bg-blue-100 bg-opacity-50">
    <!-- Action bar -->
    <ActionBar class="text-white bg-blue-800" title="Movie Database">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" />
    </ActionBar>

    <!-- Body of the app -->
    <FlexboxLayout flexDirection="column" width="100%" alignItems="flex-start">
      <ScrollView orientation="vertical" class="bg-gray-200">
        <FlexboxLayout flexDirection="column">
          <label textWrap="true" class="m-2 px-2 text-gray-900">
            <FormattedString>
              <span
                text="Upcoming movies:"
                class="font-semibold text-lg p-2 truncate ..."
              />
            </FormattedString>
          </label>
          <ScrollView orientation="horizontal" class="bg-gray-200">
            <FlexboxLayout
              flexDirection="horizontal"
              alignItems="flex-start"
              class="mx-2 shadow-3xl"
            >
              <template v-for="(movie, counter) in upcoming">
                <SimpleMovieCard :movie="movie" :key="counter" />
              </template>
            </FlexboxLayout>
          </ScrollView>
          <FlexboxLayout flexDirection="column">
            <label textWrap="true" class="mx-2 mb-2 px-2 text-gray-900">
              <FormattedString>
                <span
                  text="Popular movies:"
                  class="font-semibold text-lg p-2 truncate ..."
                />
              </FormattedString>
            </label>
            <template v-for="(movie, counter) in movies">
              <FullMovieCard :movie="movie" :key="counter" />
            </template>
          </FlexboxLayout>
        </FlexboxLayout>
      </ScrollView>
    </FlexboxLayout>
  </Page>
</template>

<script>
const imagePrefix = "https://image.tmdb.org/t/p/w1280";

import urls from "../utils/urls";
import SimpleMovieCard from "./SimpleMovieCard.vue";
import FullMovieCard from "./FullMovieCard.vue";

export default {
  data() {
    return {
      popUrl: null,
      searchUrl: null,
      upcomingUrl: null,
      searchTerm: "",
      movies: [],
      upcoming: [],
    };
  },

  components: {
    SimpleMovieCard,
    FullMovieCard,
  },

  methods: {
    parseImageResponse(movies) {
      return movies
        .filter((movie) => movie.poster_path !== null)
        .map((movie) => {
          return {
            poster: `${imagePrefix}${movie.poster_path}`,
            date: movie.release_date,
            title: movie.title,
            overview: movie.overview,
            original_language: movie.original_language,
            popularity: movie.popularity,
            vote_count: movie.vote_count,
            vote_average: movie.vote_average,
          };
        });
    },

    async fetchPopularMovies() {
      await fetch(this.popUrl)
        .then((info) => info.json())
        .then((data) => {
          this.movies = data.results
            .filter((movie) => movie.poster_path !== null)
            .map((movie) => {
              return {
                poster: `${imagePrefix}${movie.poster_path}`,
                date: movie.release_date,
                title: movie.title,
                overview: movie.overview,
                original_language: movie.original_language,
                popularity: movie.popularity,
                vote_count: movie.vote_count,
                vote_average: movie.vote_average,
              };
            });
        });
    },

    async fetchUpcomingMovies() {
      await fetch(this.upcomingUrl)
        .then((info) => info.json())
        .then((data) => {
          this.upcoming = data.results
            .filter((movie) => movie.poster_path !== null)
            .map((movie) => {
              return {
                poster: `${imagePrefix}${movie.poster_path}`,
                date: movie.release_date,
                title: movie.title,
                overview: movie.overview,
                original_language: movie.original_language,
                popularity: movie.popularity,
                vote_count: movie.vote_count,
                vote_average: movie.vote_average,
              };
            });
        });
    },
  },

  mounted() {
    this.fetchPopularMovies();
    this.fetchUpcomingMovies();
  },

  created() {
    this.popUrl = urls.popUrl;
    this.upcomingUrl = urls.upcomingUrl;
  },
};
</script>

<style scoped></style>
