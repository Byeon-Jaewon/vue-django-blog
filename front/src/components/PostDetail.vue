<template>
  <v-container class="grey lighten-5">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10">
        <h1>post title</h1>
        <p>2022-01-01, written by author</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" lg="7">
        <v-card class="pa-2" outlined tile>
          <p>asdsadasd<br />brbfdffsdf <br /><br /><br /><br /><br />dffsdsf</p>
          <div>
            <strong>TAGS:</strong>
            <v-chip class="ma-2" color="success" outlined> python </v-chip>
            <v-chip class="ma-2" color="success" outlined> django </v-chip>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" lg="3">
        <v-card class="pa-2 mb-5" tile>
          <p>prev post</p>
          <h2>previous post title</h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <p>next post</p>
          <h2>next post title</h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <p>tag cloud</p>
          <v-chip class="ma-2" color="indigo" text-color="white">
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            python
          </v-chip>
          <v-chip class="ma-2" color="indigo" text-color="white">
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            django
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({

  }),
};
</script>
