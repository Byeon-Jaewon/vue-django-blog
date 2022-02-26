<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="posts"
      sort-by="calories"
      class="elevation-1"
      :items-per-page="5"
      @click:row="serverPage"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            >Post List
            <span v-if="tagname" class="body-1 font-italic ml-3"
              >(with {{ tagname }} tagged)</span
            >
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click="dialogOpen('create', {})"
          >
            New Post
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click.stop="dialogOpen('update', item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click.stop="deltePost(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="fetchPostList"> Reset </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form id="post-form" ref="postForm">
            <v-text-field
              label="ID"
              name="id"
              readonly
              v-model="editedItem.id"
            ></v-text-field>
            <v-text-field
              label="TITLE"
              name="title"
              v-model="editedItem.title"
            ></v-text-field>
            <v-text-field
              label="DESCRIPTION"
              name="description"
              v-model="editedItem.description"
            ></v-text-field>
            <v-textarea
              outlined
              label="CONTENT"
              name="content"
              v-model="editedItem.content"
            ></v-textarea>
            <v-text-field
              label="OWNER"
              name="owner"
              readonly
              v-model="editedItem.owner"
            ></v-text-field>
            <v-text-field
              label="TAGS"
              name="tags"
              v-model="editedItem.tags"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deltePostConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script>
import axios from "axios";
import EventBus from './user_event_bus'

export default {
  name: "PostList",

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "제목", value: "title" },
      { text: "요약", value: "description" },
      { text: "작성자", value: "owner" },
      { text: "수정일", value: "modify_at" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    posts: [],
    tagname: "",
    editedIndex: -1,
    editedItem: {},
    actionKind: "",
    me: {username:'anonymous'},
  }),

  computed: {
    formTitle() {
      if (this.actionKind === "create") return "Create Post";
      else return "Edit Post";
    },
  },

  created() {
    const params = new URL(location).searchParams;
    this.tagname = params.get("tagname");
    this.fetchPostList();

    EventBus.$on('me_change', (val) => {
      this.me = val;
    });
  },

  methods: {
    fetchPostList() {
      console.log("fetchPostList");

      let getUrl = "";
      if (this.tagname) getUrl = `/api/post/list/?tagname=${this.tagname}`;
      else getUrl = "/api/post/list/";

      axios
        .get(getUrl)
        .then((res) => {
          console.log("post get res", res);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log("post get err", err.responser);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    serverPage(item) {
      console.log("serverPage()");
      location.href = `/blog/post/${item.id}`;
    },

    dialogOpen(actionKind, item) {
      if (this.me.username === 'anonymous') {
        alert("not logged in");
        return ;
      }
      this.actionKind = actionKind;
      if (actionKind === "create") {
        this.editedIndex = -1;
        this.editedItem = {};
      } else {
        this.editedIndex = this.posts.indexOf(item);
        this.editedItem = Object.assign({}, item);
      }
      this.dialog = true;
    },

    cancel() {
      this.dialog = false;
    },

    save() {
      if (this.actionKind === "create") this.createPost();
      else this.updatePost();
      this.cancel();
    },

    createPost() {
      console.log("createPost()");
      const formData = new FormData(document.getElementById("post-form"));
      axios
        .post("/api/post/create/", formData)
        .then((res) => {
          this.posts.push(res.data);
        })
        .catch((err) => {
          console.log('create post post res', err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    updatePost() {
      console.log("updatePost()");
      const formData = new FormData(document.getElementById("post-form"));
      formData.set('owner', this.me.id);
      axios
        .post(`/api/post/${this.editedItem.id}/update/`, formData)
        .then((res) => {
          this.posts.splice(this.editedIndex, 1, res.data);
        })
        .catch((err) => {
          console.log('update post post res', err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
    deltePost(item) {
      console.log("deletePost()");
      if (this.me.username === 'anonymous') {
        alert("not logged in");
        return ;
      }
      if (!confirm("Are you sure to delete?")) return;
      axios
        .delete(`/api/post/${item.id}/delete/`)
        .then((res) => {
          console.log(res);
          const index = this.posts.indexOf(item);
          this.posts.splice(index, 1);
        })
        .catch((err) => {
          console.log('delete post delete res', err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
  },
};
</script>
<style scoped>
.v-data-table >>> tbody > tr {
  cursor: pointer;
}
</style>