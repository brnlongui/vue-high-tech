<template>
  <div>
    <v-card class="my-9 mx-auto" width="65%" v-if="showForm">
      <v-btn absolute dark fab small top right color="error" @click="showForm = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-container>
        <div class="mb-4">{{formTitle }}</div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Digite o nome" v-model="currentUser.name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Digite o email" v-model="currentUser.email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Digite a senha" v-model="currentUser.password" type="password"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Digite o username" v-model="currentUser.username"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-row justify="center">
          <v-btn color="success" @click="save" class="mx-1">Salvar</v-btn>
          <v-btn color="error" @click="cancel" class="mx-1">Cancelar</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Usuarios Cadastrados</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn absolute dark small fab right color="primary" @click="openForm" v-if="!showForm">
            <v-icon small>mdi-account-plus</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon
          small
          @click="activateItem(item)"
        >{{ item.active ? "mdi-account-cancel": "mdi-account-check"}}</v-icon>
      </template>
      <template v-slot:no-data>
        <v-subheader>Nenhum usuário cadastrado</v-subheader>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemEdit: null,
    users: [],
    currentUser: {},
    generatorId: 3,
    showForm: false,
    headers: [
      {
        text: "Nome",
        value: "name"
      },
      {
        text: "Username",
        value: "username"
      },
      {
        text: "Email",
        value: "email"
      },
      {
        text: "Ações",
        value: "actions",
        sortable: false
      }
    ]
  }),

  computed: {
    formTitle() {
      return this.itemEdit === null ? "Novo Usuario" : "Editar Usuario";
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.users = [
        {
          id: 0,
          name: "Joao",
          username: "joao1",
          password: "123",
          email: "joao1@gmail.com",
          active: true
        },
        {
          id: 1,
          name: "Maria",
          username: "MariaS",
          password: "213",
          email: "marias@gmail.com",
          active: false
        },
        {
          id: 2,
          name: "Ze",
          username: "Zezin",
          password: "213",
          email: "zezin@gmail.com",
          active: true
        }
      ];
    },

    openForm() {
      this.showForm = true;
    },

    activateItem(user) {
      user.active = !user.active;
    },

    save() {
      if (this.itemEdit == null) {
        this.add();
      } else {
        this.saveEdit();
      }
      this.showForm = false;
      this.cancel();
    },

    add() {
      let userCopied = {};
      Object.assign(userCopied, this.currentUser);
      //userCopied.id = this.generatorId;
      userCopied.active = true;
      this.users.push(userCopied);
      //generatorId++;
    },

    editItem(user) {
      let userCopied = {};
      Object.assign(userCopied, user);
      this.itemEdit = userCopied;
      this.currentUser = userCopied;
      this.showForm = true;
    },

    saveEdit() {
      for (let index = 0; index < this.users.length; index++) {
        if (this.itemEdit.id == this.users[index].id) {
          this.users.splice(index, 1, this.itemEdit);
          break;
        }
      }
    },

    cancel() {
      this.currentUser = {};
      this.itemEdit = {};
    }
  }
};
</script>


<style>
</style>