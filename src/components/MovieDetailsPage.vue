<template>
  <Page class="bg-blue-100 bg-opacity-50 h-screen w-screen">
    <ActionBar
      class="text-white text-center bg-blue-800"
      :title="movie.title"
    />
    <ScrollView orientation="vertical">
      <FlexboxLayout flexDirection="column" class="h-full">
        <image
          :src="movie.poster"
          stretch="fill"
          loadMode="async"
          class="border border-2xl border-blue-700 mb-3 h-4/6"
        />
        <FlexboxLayout flexDirection="column" class="px-4">
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
        <label textWrap="true" class="p-4 text-gray-700">
          <FormattedString>
            <span :text="movie.overview" class="font-semibold text-md p-4" />
          </FormattedString>
        </label>
        <WrapLayout class="mt-2 gap-2 p-2">
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
    </ScrollView>
  </Page>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>

<style scoped>
.image-height {
  height: 30rem;
}
</style>
